(function() {
    const COZE_CONFIG = {
        botId: '7571673099415371839',
        appId: '1175092162510',
        publicKey: 'HD5QISuYg4A0bgIQ8qKjeY3U482v_3ydWltgBxmL3EY',
        privateKey: `-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCulFdSoZ0l92tw
m2/QDJg8qaiBtgsMzFSacEy5Oj4FOLtMGVnq/6k+RdqJgRgQlgK7TeyrgqGH5F6x
R70SecJyxjV1DC/q+Cz7LXxwfYjaYkOUgara3Wii80FXgb9W57TF9SCtR/JqdizV
V1nbANcczr9J7N5pRK01Lqy7cM02I84d5d7JEGOYcjT3GK7fIBxlEB8JbAQnX1z+
tXCHZALG49KzkjtB5B22rsjLw5b75Bsxpf5ViKXzigfIGhzfq4irEmXRYs1zYvgJ
7uZG3U8bEhzKdjCPN/Tf+daHr9LRnzKqo2T+b/AzztAfhMSHe8dAUkS3xnGHtR1T
f0Za+G3NAgMBAAECgf8aRAW2BdSGI9zMf7+dKon/GqA/mWYQNEq32OMuE9dA8dzI
fXuN8DN14LoIvEqxCtiHqEp3cu3i3v0uprU2+Z7ca/4SlePZhseQTSadUndVGaUy
T5pMS0WT9E+eVq05LDflb6EX3GBq/ukKOEvAM8uEWH37mRMGonfP66lsJvfiReYl
avbQDr0+TID9eoBdOIY6DyuUDD1TPYlH2gKeV2bbvEvJ5i7IJh4MC6koacCjncfz
NwKXRKsVYcONJYnOlSo2ltdX2VVcz+RQWVua40MnBf4aag0IeYe3M/UJMVWfoIi4
LaW8D5SZbwq8Alsq/1W/4pQ8kByPA2nlVHL7oekCgYEA5QiYUS0fvnZqXGj/5Pg/
1+iZ9Bt7Aum0YZ1djk+5glJmSnCqPlydl0U/crlzTaCw8fWCvAZ3Q/2h1TiOqb7H
iJNrGpGdRXbtkSBAI3h67WxYrZ9b3Hi/tcAVtA0smAwQ2kPG6NbZRiwTYdDT0XOW
kBfttogNi/+zhPcdlxmX/I8CgYEAwyJreuygbwhDalwLA/q7fObJgWKhK5KZP/UQ
RLiLfg4p9cTTKopOswYByZIJfECFRdh3Wy8zdzUJlkYrcYHa98z1nnWAtmSMy+sV
SOZ7D/EBlSJlNCtrEbEaMgsY/uMvY2RFP9ef7vf8a+c47IpBf2EIv/o/zVpdi3UH
DoQoVeMCgYEAg+3ih4gdrAHcHKUjGkrhw8YpwJJ/1lq23C/gr1Q/QNGkOKcTed6x
rGxoMvaec43nv0iz6Qk0dEbKjN8KVr8dgw+f92r/k/8As8NHDuecr9zkbAbKzIIF
tHUUS2X3VRJGNuQp1P/FooVLGOJI0XLqvM/7z1QpsYY2a5ZJRjuo8AMCgYEAmU0O
QXlrJS/JvuJm6Q5vg1XQ0yxIUHIQobWGvWZ6eGLqRiIGf/I+l9jNSK3Jc+tAiLni
Mynm9e0eBghEkx0giPNlt8K6hxCBqKachzRDVCfURXTLK2w85p5LZStgzMZw8VXS
LbDZ/iSnE6KJDxQjFs6F0ETrIQqwWSJsk9Px2F8CgYAbKjjpCjdK5/guDZK5je+D
DAAX/nx2kdJ0CeTD+4xr9NZl4A7iRPODRJWkcc5KqqfBcFyK5wRClPr+oU57mk6J
//+REUxkS7hOcHSAJ242ji/Sd6ZQ5VRisHJesD0y1woKtc3xe5eu7YriUDYWnIIy
diFX6F9x0k2pM7EuIqWbeg==
-----END PRIVATE KEY-----`
    };

    // 会话管理类
    class SessionManager {
        constructor() {
            this.currentSession = null;
            this.sessions = new Map();
            this.init();
        }

        init() {
            // 从localStorage恢复会话
            const savedSessions = localStorage.getItem('coze_sessions');
            if (savedSessions) {
                try {
                    const sessionsData = JSON.parse(savedSessions);
                    sessionsData.forEach(session => {
                        this.sessions.set(session.id, session);
                    });
                } catch (error) {
                    console.warn('Failed to parse saved sessions:', error);
                }
            }
        }

        // 创建新会话
        createNewSession(userId) {
            const sessionId = `session_${Date.now()}_${Math.random().toString(36).slice(2)}`;
            const session = {
                id: sessionId,
                userId: userId,
                createdAt: new Date().toISOString(),
                lastActivity: new Date().toISOString(),
                messageCount: 0
            };
            
            this.sessions.set(sessionId, session);
            this.currentSession = sessionId;
            this.saveSessions();
            return sessionId;
        }

        // 获取当前会话ID
        getCurrentSessionId() {
            if (!this.currentSession) {
                const userId = this.getUserUid();
                this.currentSession = this.createNewSession(userId);
            }
            return this.currentSession;
        }

        // 获取会话的用户ID
        getSessionUserId(sessionId) {
            const session = this.sessions.get(sessionId);
            return session ? session.userId : this.getUserUid();
        }

        // 获取用户唯一标识
        getUserUid() {
            // 从本地存储获取登录用户ID
            const loggedUserId = localStorage.getItem('website_user_id');
            if (loggedUserId) return loggedUserId;

            // 生成临时访客ID
            let visitorId = localStorage.getItem('coze_visitor_id');
            if (!visitorId) {
                visitorId = `visitor_${Date.now()}_${Math.random().toString(36).slice(-6)}`;
                localStorage.setItem('coze_visitor_id', visitorId);
            }
            return visitorId;
        }

        // 更新会话活动时间
        updateSessionActivity(sessionId) {
            const session = this.sessions.get(sessionId);
            if (session) {
                session.lastActivity = new Date().toISOString();
                session.messageCount = (session.messageCount || 0) + 1;
                this.saveSessions();
            }
        }

        // 保存会话到localStorage
        saveSessions() {
            const sessionsArray = Array.from(this.sessions.values());
            localStorage.setItem('coze_sessions', JSON.stringify(sessionsArray));
        }

        // 获取所有会话
        getAllSessions() {
            return Array.from(this.sessions.values());
        }

        // 切换会话
        switchSession(sessionId) {
            if (this.sessions.has(sessionId)) {
                this.currentSession = sessionId;
                return true;
            }
            return false;
        }

        // 清理过期会话（超过24小时）
        cleanupExpiredSessions() {
            const now = new Date();
            const expiredSessions = [];
            
            this.sessions.forEach((session, sessionId) => {
                const lastActivity = new Date(session.lastActivity);
                const hoursDiff = (now - lastActivity) / (1000 * 60 * 60);
                
                if (hoursDiff > 24) {
                    expiredSessions.push(sessionId);
                }
            });

            expiredSessions.forEach(sessionId => {
                this.sessions.delete(sessionId);
            });

            if (expiredSessions.length > 0) {
                this.saveSessions();
            }
        }
    }

    // 加载JWT库
    function loadJwtLibrary() {
        return new Promise((resolve, reject) => {
            // 检查是否加载成功
            if (window.KJUR && window.KJUR.jws && window.KJUR.jws.JWS) {
                resolve();
                return;
            }
            
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jsrsasign/8.0.20/jsrsasign-all-min.js';
            script.type = 'text/javascript';
            script.crossOrigin = 'anonymous';

            script.onload = () => {
                if (window.KJUR && window.KJUR.jws && window.KJUR.jws.JWS) {
                    resolve();
                } else {
                    reject(new Error('JWT库加载但未正确初始化'));
                }
            };
            
            script.onerror = () => {
                reject(new Error(`JWT库加载失败，请检查链接: ${script.src}`));
            };

            document.head.appendChild(script);
        });
    }

    // 生成符合Coze要求的JWT（支持会话隔离）
    function generateCozeJwt(sessionManager) {
        const sessionId = sessionManager.getCurrentSessionId();
        const userUid = sessionManager.getSessionUserId(sessionId);
        
        const header = {
            alg: 'RS256',
            typ: 'JWT',
            kid: COZE_CONFIG.publicKey
        };
        
        const currentTime = Math.floor(Date.now() / 1000);
        const payload = {
            iss: COZE_CONFIG.appId,
            aud: "api.coze.cn",
            jti: Math.random().toString(36).substr(2, 32) + Date.now(),
            iat: currentTime,
            exp: currentTime + 3600,
            session_name: `${userUid}_${sessionId}` // 包含用户ID和会话ID
        };
        
        return window.KJUR.jws.JWS.sign(
            header.alg,
            JSON.stringify(header),
            JSON.stringify(payload),
            COZE_CONFIG.privateKey
        );
    }

    // 获得Token并创建Coze智能体界面
    async function getAccessToken(jwt, sessionManager) {
        try {
            const response = await fetch("https://api.coze.cn/api/permission/oauth2/token", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`
                },
                body: JSON.stringify({
                    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
                    duration_seconds: 900
                })
            });
            
            if (!response.ok) {
                throw new Error(`获取token失败，HTTP状态码: ${response.status}`);
            }

            const data = await response.json();
            
            // 创建Coze客户端
            const client = new CozeWebSDK.WebChatClient({
                config: {
                    bot_id: COZE_CONFIG.botId
                },
                componentProps: {
                    title: 'Coze AI助手 - 会话隔离'
                },
                auth: {
                    type: 'token',
                    token: data.access_token,
                    onRefreshToken: () => {
                        // 刷新token时也保持会话隔离
                        const newJwt = generateCozeJwt(sessionManager);
                        return getAccessToken(newJwt, sessionManager).then(data => data.access_token);
                    }
                }
            });

            // 监听消息事件以更新会话活动
            if (client && client.on) {
                client.on('message', (event) => {
                    if (event.type === 'user_message' || event.type === 'bot_message') {
                        sessionManager.updateSessionActivity(sessionManager.getCurrentSessionId());
                    }
                });
            }

        } catch (error) {
            console.error('获取Access Token失败:', error);
            throw error;
        }
    }

    // 加载Coze SDK
    function loadCozeSdk() {
        return new Promise((resolve, reject) => {
            if (window.CozeWebSDK && window.CozeWebSDK.WebChatClient) {
                resolve();
                return;
            }
            
            const script = document.createElement('script');
            script.src = "https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.2.0-beta.10/libs/cn/index.js";
            
            script.onload = () => {
                if (window.CozeWebSDK && window.CozeWebSDK.WebChatClient) {
                    resolve();
                } else {
                    reject(new Error('Coze SDK加载但未正确初始化'));
                }
            };
            
            script.onerror = () => {
                reject(new Error('Coze SDK加载失败'));
            };
            
            document.head.appendChild(script);
        });
    }

    // 创建会话管理界面（隐藏UI版本）
    function createSessionUI(sessionManager) {
        // 不再创建可见的UI元素，但保留会话管理功能
        console.log('会话隔离功能已启用，会话管理UI已隐藏');
        
        // 只保留会话管理逻辑，不暴露全局对象
        // 会话功能继续正常运行，但用户无法手动切换会话
        
        return null;
    }

    // 初始化Coze聊天（支持会话隔离，无UI界面）
    async function initCozeChat() {
        try {
            // 创建会话管理器
            const sessionManager = new SessionManager();
            
            // 定期清理过期会话
            setInterval(() => {
                sessionManager.cleanupExpiredSessions();
            }, 3600000); // 每小时清理一次

            // 生成JWT并获取token
            const jwtToken = generateCozeJwt(sessionManager);
            await getAccessToken(jwtToken, sessionManager);

            console.log('Coze智能体已初始化，会话隔离功能正常运行（UI已隐藏）');

        } catch (error) {
            console.error('初始化Coze智能体失败:', error);
        }
    }

    // 初始化流程
    async function init() {
        try {
            await loadJwtLibrary();
            await loadCozeSdk();
            await initCozeChat();
        } catch (error) {
            console.error('Coze智能体初始化失败:', error);
        }
    }

    // 页面加载完成后初始化
    if (document.readyState === 'complete') {
        init();
    } else {
        window.addEventListener('load', init);
    }

})();