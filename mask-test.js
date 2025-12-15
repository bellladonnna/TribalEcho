// 面具测试游戏逻辑
class MaskTest {
    constructor() {
        this.currentQuestion = 0;
        this.answers = [];
        this.isTransitioning = false;
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.results = {
            'result1': {
                id: '1',
                name: "鲍勒族 · 祖先面具 ",
                tribe: "",
                title: "和谐型人格 · 美学标杆",
                trait: "优雅",
                strength: "平衡",
                skill: "颜值维稳",
                description: "你崇尚并创造着一切形式的美与和谐。是社交圈里的定海神针，能用温柔的力量抚平毛躁，让世界变得优雅从容。",
                color: "bg-red-100",
                icon: "🛡️"
            },
            'result2': {
                id: '2',
                name: "塞努福部落 · 德格勒面具",
                tribe: "",
                title: "力量型人格 · 野性图腾",
                trait: "守护",
                strength: "威慑",
                skill: "驱邪避灾",
                description: "你是抵御负面能量的屏障，原始力量的化身。气场如同不灭的火焰，能守护社群的安宁与纯净。",
                color: "bg-green-100",
                icon: "🌾"
            },
            'result3': {
                id: '3',
                name: "多贡部落 · 大面具",
                tribe: "",
                title: "哲思型人格 · 宇宙模组",
                trait: "深邃",
                strength: "洞察",
                skill: "参透本质",
                description: "你的精神连接着星辰与古老智慧。喜欢探寻万物规律，是朋友中行走的百科圣光，总能带来降维打击的启发。",
                color: "bg-indigo-100",
                icon: "🌌"
            },
            'result4': {
                id: '4',
                name: "巴库巴族 · 邦博面具",
                tribe: "",
                title: "领袖型人格 · 天选贵族",
                trait: "华丽",
                strength: "统御",
                skill: "华丽控场",
                description: " 你的魅力来自与生俱来的格局与气场。无需刻意强调，就能成为人群的中心，指引方向，天生就是大场面玩家。",
                color: "bg-blue-100",
                icon: "🦁"
            },
            'result5': {
                id: '5',
                name: "丹人 · 丹面具",
                tribe: "",
                title: "调解型人格 · 和平基站",
                trait: "宁静",
                strength: "凝聚",
                skill: "化干戈为玉帛",
                description: "你拥有让对立双方冷静下来的魔力。是人际关系的润滑剂，总能精准找到共识，让世界因你而更团结。",
                color: "bg-orange-100",
                icon: "🤝"
            },
            'result6': {
                id: '6',
                name: "马康德部落 · 谢塔尼面具",
                tribe: "",
                title: "灵感型人格 · 梦境捕手",
                trait: "抽象",
                strength: "创意",
                skill: "脑洞开花",
                description: "你的思维不受重力束缚，是天生的幻想建筑师。总能从异次元带来惊喜，是团队里不可或缺的灵感永动机。",
                color: "bg-yellow-100",
                icon: "⚔️"
            },
            'result7': {
                id: '7',
                name: "约鲁巴部落 · 盖莱德面具",
                tribe: "",
                title: "沟通型人格 · 幽默观察家",
                trait: "诙谐",
                strength: "警世",
                skill: "寓教于乐",
                description: "你擅长用幽默包裹智慧，在欢声笑语中点破真相。是洞察人性的社交艺术家，你的"吐槽"总让人心服口服。",
                color: "bg-purple-100",
                icon: "⚖️"
            },
            'result8': {
                id: '8',
                name: "普努人 · 普努面具",
                tribe: "",
                title: "灵性人格 · 祖灵之桥",
                trait: "典雅",
                strength: "连接",
                skill: "通灵对话",
                description: "你的气质沉静而通透，如同连接天地的白桦。能轻易聆听来自过去与自然的声音，是温柔的灵性媒介。",
                color: "bg-amber-100",
                icon: "📿"
            }
        };

        this.questions = [
            {
                id: 1,
                text: "你如何看待自己在社群中的角色？",
                options: [
                    { text: "守护者。 我本能地保护身边的人，维护秩序与正义，是大家信赖的依靠。", image: "https://i.pinimg.com/736x/0f/b6/67/0fb66746251c49b2c0cb1bdc27e191f1.jpg", type: 'A' },
                    { text: "智者。 我乐于思考与传授知识，是连接过去与未来的桥梁，常为他人指引方向。", image: "https://i.pinimg.com/1200x/b6/8e/ba/b68eba0b0851e08316d0809794bd6f9a.jpg", type: 'B' },
                    { text: "沟通者。 我擅长协调矛盾，传递信息，是促进群体和谐与理解的纽带。", image: "https://i.pinimg.com/1200x/18/25/b9/1825b91e026f70135b26953a1c3bbe46.jpg", type: 'C' },
                    { text: "治愈者。 我充满同理心，能抚慰他人情绪，并热爱自然与生命的力量。", image: "https://i.pinimg.com/736x/34/26/96/3426968b834429fa240ab58108461557.jpg", type: 'D' }
                ]
            },
            {
                id: 2,
                text: "哪种力量最让你心生向往？",
                options: [
                    { text: "雄狮的勇气。 无畏、强大，拥有征服一切困难的决心。", image: "https://i.pinimg.com/736x/e4/bf/df/e4bfdfa397b5b0db20ff5cee99f443c9.jpg", type: 'A' },
                    { text: "猎豹的灵巧。 敏捷、精准，总能洞察先机，找到最佳路径。", image: "https://i.pinimg.com/736x/45/78/12/457812a8b5c6f3d2e9f4a1b2c3d4e5f6.jpg", type: 'B' },
                    { text: "大象的智慧。 沉稳、长寿，拥有古老的记忆和家族凝聚力。", image: "https://i.pinimg.com/736x/67/89/01/678901a2b3c4d5e6f7a8b9c0d1e2f3g4.jpg", type: 'C' },
                    { text: "雨水的滋养。 温柔、润养，能带来新生与希望。", image: "https://i.pinimg.com/736x/78/90/12/789012b3c4d5e6f7a8b9c0d1e2f3g4h5.jpg", type: 'D' }
                ]
            },
            {
                id: 3,
                text: "面对一个未知的挑战，你的第一反应是？",
                options: [
                    { text: "正面迎接。 制定计划，集结力量，直接而果断地解决问题。", image: "https://i.pinimg.com/736x/89/01/23/890123c4d5e6f7a8b9c0d1e2f3g4h5i6.jpg", type: 'A' },
                    { text: "深入洞察。 先观察、分析，理解其本质和规律，再寻求破解之道。", image: "https://i.pinimg.com/736x/90/12/34/901234d5e6f7a8b9c0d1e2f3g4h5i6j7.jpg", type: 'B' },
                    { text: "寻求协作。 联系同伴，交换信息，集合众人的智慧共同面对。", image: "https://i.pinimg.com/736x/01/23/45/012345e6f7a8b9c0d1e2f3g4h5i6j7k8.jpg", type: 'C' },
                    { text: "顺应节奏。 调整自身状态，像水一样流动，在适应中找到机会。", image: "https://i.pinimg.com/736x/12/34/56/123456e6f7a8b9c0d1e2f3g4h5i6j7k8l9.jpg", type: 'D' }
                ]
            },
            {
                id: 4,
                text: "你希望他人如何记住你？",
                options: [
                    { text: "一个强大的传奇。 我的存在本身，就是一种力量和庇护。", image: "https://i.pinimg.com/736x/23/45/67/234567e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0.jpg", type: 'A' },
                    { text: "一个智慧的源泉。 我的思想和话语，能持续启发后人。", image: "https://i.pinimg.com/736x/34/56/78/345678e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1.jpg", type: 'B' },
                    { text: " 一个和谐的象征。 我让世界变得更加包容与美好。", image: "https://i.pinimg.com/736x/45/67/89/456789e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2.jpg", type: 'C' },
                    { text: "一个生命的礼赞。 我带来了欢乐、治愈与连接。", image: "https://i.pinimg.com/736x/56/78/90/567890e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3.jpg", type: 'D' }
                ]
            },
            {
                id: 5,
                text: "在社交场合中，你通常是？",
                options: [
                    { text: "话题主导者。 能自然地引领对话节奏，气场强大。", image: "https://i.pinimg.com/736x/67/89/01/678901e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4.jpg", type: 'A' },
                    { text: "深度剖析者。 喜欢进行有意义的对话，并提出独特见解。", image: "https://i.pinimg.com/736x/78/90/12/789012e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5.jpg", type: 'B' },
                    { text: "氛围调节者。 关注每个人的感受，确保场面和谐愉快。", image: "https://i.pinimg.com/736x/89/01/23/890123e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6.jpg", type: 'C' },
                    { text: "安静倾听者。 善于理解他人，并提供温暖的陪伴和支持。", image: "https://i.pinimg.com/736x/90/12/34/901234e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7.jpg", type: 'D' }
                ]
            },
            {
                id: 6,
                text: "你更偏爱哪种创作方式？",
                options: [
                    { text: "构建宏大的体系。 比如策划一个项目，搭建一个清晰的框架。", image: "https://i.pinimg.com/736x/01/23/45/012345e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8.jpg", type: 'A' },
                    { text: "解构复杂的概念。 比如研究理论，将抽象事物具象化。", image: "https://i.pinimg.com/736x/12/34/56/123456e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9.jpg", type: 'B' },
                    { text: "编织精妙的故事。 比如通过叙述来连接人与人之间的情感。", image: "https://i.pinimg.com/736x/23/45/67/234567e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0.jpg", type: 'C' },
                    { text: "感受即兴的灵感。 比如随心的涂鸦、音乐或舞蹈，表达瞬间的情绪。", image: "https://i.pinimg.com/736x/34/56/78/345678e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1.jpg", type: 'D' }
                ]
            },
            {
                id: 7,
                text: "你认为什么是理想的社区？",
                options: [
                    { text: "纪律严明的堡垒。 安全、有序，拥有强大的防御和规则。", image: "https://i.pinimg.com/736x/45/67/89/456789e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2.jpg", type: 'A' },
                    { text: "思想自由的学城。 鼓励探索知识，尊重智慧和创新。", image: "https://i.pinimg.com/736x/56/78/90/567890e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3.jpg", type: 'B' },
                    { text: "平等互助的联盟。 没有隔阂，人们通过沟通达成共识。", image: "https://i.pinimg.com/736x/67/89/01/678901e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a4.jpg", type: 'C' },
                    { text: "亲近自然的部落。 与环境和诸共处，生活节奏顺应天地。", image: "https://i.pinimg.com/736x/78/90/12/789012e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b5.jpg", type: 'D' }
                ]
            },
            {
                id: 8,
                text: "你如何定义自己的“美”？",
                options: [
                    { text: "力量之美。 体现在坚韧、果断和实际的成就上。", image: "https://i.pinimg.com/736x/89/01/23/890123e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c6.jpg", type: 'A' },
                    { text: "智慧之美。 体现在深邃的思想、洞察力和创造力上。", image: "https://i.pinimg.com/736x/90/12/34/901234e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d7.jpg", type: 'B' },
                    { text: "和谐之美。 体现在优雅的举止、得体的言行和平衡感上。", image: "https://i.pinimg.com/736x/01/23/45/012345e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e8.jpg", type: 'C' },
                    { text: "本真之美。 体现在质朴的内心、真实的情感和生命力上。", image: "https://i.pinimg.com/736x/12/34/56/123456e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f9.jpg", type: 'D' }
                ]
            }
        ];

        this.init();
    }

    init() {
        this.bindEvents();
        this.showScreen('gameStart');
    }

    bindEvents() {
        // 开始测试按钮
        document.getElementById('startTestBtn').addEventListener('click', () => {
            this.startTest();
        });





        // 重新测试按钮
        document.getElementById('retakeTestBtn').addEventListener('click', () => {
            this.retakeTest();
        });

        // 分享结果按钮
        document.getElementById('shareResultBtn').addEventListener('click', () => {
            this.shareResult();
        });
    }

    showScreen(screenId) {
        const screens = document.querySelectorAll('.game-screen');
        screens.forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    startTest() {
        this.currentQuestion = 0;
        this.answers = [];
        this.showScreen('gameQuestions');
        this.displayQuestion();
    }

    displayQuestion() {
        const questionNumber = document.getElementById('questionNumber');
        const progressFill = document.getElementById('progressFill');

        // 更新进度
        questionNumber.textContent = `${this.currentQuestion + 1}/${this.questions.length}`;
        const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
        progressFill.style.width = `${progress}%`;

        // 如果是第一次显示，生成所有问题卡片
        if (this.currentQuestion === 0 && !document.getElementById('questionSlider').children.length) {
            this.generateAllQuestionCards();
            this.generateIndicators();
            this.setupSwipeHandlers();
            this.setupWheelHandler();
        }

        // 更新卡片位置
        this.updateCardPosition();
        this.updateIndicators();
        this.restoreSelection();
    }

    generateAllQuestionCards() {
        const slider = document.getElementById('questionSlider');
        slider.innerHTML = '';
        
        this.questions.forEach((question, qIndex) => {
            // 创建问题卡片容器
            const card = document.createElement('div');
            card.className = 'question-card';
            card.dataset.index = qIndex;
            
            // 创建问题组容器 - 将问题和选项包装在一起
            const questionGroup = document.createElement('div');
            questionGroup.className = 'question-group';
            questionGroup.dataset.question = qIndex + 1; // 添加问题编号属性
            
            // 创建问题标题容器
            const questionHeader = document.createElement('div');
            questionHeader.className = 'question-header';
            
            const questionNumber = document.createElement('div');
            questionNumber.className = 'question-number';
            questionNumber.textContent = `问题 ${qIndex + 1}`;
            
            const questionText = document.createElement('h2');
            questionText.className = 'question-text';
            questionText.textContent = question.text;
            
            questionHeader.appendChild(questionNumber);
            questionHeader.appendChild(questionText);
            
            // 创建选项容器
            const optionsContainer = document.createElement('div');
            optionsContainer.className = 'options-container';
            
            const optionLabels = ['A', 'B', 'C', 'D'];
            
            question.options.forEach((option, oIndex) => {
                // 创建选项卡片
                const optionCard = document.createElement('div');
                optionCard.className = 'option-card';
                
                const optionElement = document.createElement('div');
                optionElement.className = 'option-item';
                optionElement.dataset.index = oIndex;
                optionElement.dataset.questionIndex = qIndex;
                
                // 解析选项文本，分离标题和正文
                const textParts = option.text.split('。');
                const title = textParts[0] + '。';
                const body = textParts.slice(1).join('。').trim();
                
                const optionNumber = document.createElement('div');
                optionNumber.className = 'option-number';
                optionNumber.textContent = optionLabels[oIndex];
                
                // 创建标题元素
                const optionTitle = document.createElement('div');
                optionTitle.className = 'option-title';
                optionTitle.textContent = title;
                
                // 创建正文元素
                const optionText = document.createElement('div');
                optionText.className = 'option-text';
                optionText.textContent = body;
                
                optionElement.appendChild(optionNumber);
                optionElement.appendChild(optionTitle);
                optionElement.appendChild(optionText);
                
                optionElement.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (parseInt(optionElement.dataset.questionIndex) === this.currentQuestion) {
                        this.selectOption(optionElement);
                    }
                });
                
                optionCard.appendChild(optionElement);
                optionsContainer.appendChild(optionCard);
            });
            
            // 将问题标题和选项组合成一个问题组
            questionGroup.appendChild(questionHeader);
            questionGroup.appendChild(optionsContainer);
            
            // 将问题组添加到卡片
            card.appendChild(questionGroup);
            slider.appendChild(card);
        });
        
        // 初始化卡片位置
        setTimeout(() => {
            this.updateCardPosition();
        }, 100);
    }

    generateIndicators() {
        const indicatorsContainer = document.getElementById('questionIndicators');
        indicatorsContainer.innerHTML = '';
        
        this.questions.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            indicator.dataset.index = index;
            
            indicator.addEventListener('click', () => {
                if (!this.isTransitioning) {
                    this.goToQuestion(index);
                }
            });
            
            indicatorsContainer.appendChild(indicator);
        });
    }

    setupSwipeHandlers() {
        const carousel = document.getElementById('questionCarousel');
        
        carousel.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        carousel.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        }, { passive: true });
    }

    setupWheelHandler() {
        const carousel = document.getElementById('questionCarousel');
        
        carousel.addEventListener('wheel', (e) => {
            e.preventDefault();
            
            if (this.isTransitioning) return;
            
            if (e.deltaY > 0) {
                // 向下滚动 - 下一题
                if (this.currentQuestion < this.questions.length - 1) {
                    this.goToQuestion(this.currentQuestion + 1);
                } else if (this.answers[this.currentQuestion] !== undefined) {
                    // 如果是最后一题且已选择，显示结果
                    this.showResult();
                }
            } else {
                // 向上滚动 - 上一题
                if (this.currentQuestion > 0) {
                    this.goToQuestion(this.currentQuestion - 1);
                }
            }
        });
    }

    handleSwipe() {
        const swipeThreshold = 50;
        const diff = this.touchStartX - this.touchEndX;
        
        if (Math.abs(diff) > swipeThreshold && !this.isTransitioning) {
            if (diff > 0) {
                // 向左滑动 - 下一题
                if (this.currentQuestion < this.questions.length - 1) {
                    this.goToQuestion(this.currentQuestion + 1);
                } else if (this.answers[this.currentQuestion] !== undefined) {
                    this.showResult();
                }
            } else {
                // 向右滑动 - 上一题
                if (this.currentQuestion > 0) {
                    this.goToQuestion(this.currentQuestion - 1);
                }
            }
        }
    }

    goToQuestion(index) {
        if (this.isTransitioning || index < 0 || index >= this.questions.length) return;
        
        this.currentQuestion = index;
        this.updateCardPosition();
        this.updateIndicators();
        this.restoreSelection();
        
        // 更新进度
        const questionNumber = document.getElementById('questionNumber');
        const progressFill = document.getElementById('progressFill');
        questionNumber.textContent = `${this.currentQuestion + 1}/${this.questions.length}`;
        const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
        progressFill.style.width = `${progress}%`;
    }

    updateCardPosition() {
        const cards = document.querySelectorAll('.question-card');
        
        cards.forEach((card, index) => {
            // 清除所有状态类
            card.classList.remove('active', 'next', 'prev', 'far-next', 'far-prev', 'hidden', 'hidden-prev');
            
            if (index === this.currentQuestion) {
                card.classList.add('active');
            } else if (index === this.currentQuestion + 1) {
                card.classList.add('next');
            } else if (index === this.currentQuestion - 1) {
                card.classList.add('prev');
            } else if (index === this.currentQuestion + 2) {
                card.classList.add('far-next');
            } else if (index === this.currentQuestion - 2) {
                card.classList.add('far-prev');
            } else if (index > this.currentQuestion + 2) {
                card.classList.add('hidden');
            } else if (index < this.currentQuestion - 2) {
                card.classList.add('hidden-prev');
            }
        });
    }

    updateIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            if (index === this.currentQuestion) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    restoreSelection() {
        const currentCard = document.querySelector('.question-card');
        if (currentCard) {
            const options = currentCard.querySelectorAll('.option-item');
            options.forEach((option, index) => {
                if (this.answers[this.currentQuestion] === index) {
                    option.classList.add('selected');
                } else {
                    option.classList.remove('selected');
                }
            });
        }
    }

    selectOption(optionElement) {
        const currentCard = document.querySelector('.question-card');
        if (currentCard) {
            const options = currentCard.querySelectorAll('.option-item');
            options.forEach(option => {
                option.classList.remove('selected');
            });
            optionElement.classList.add('selected');

            const selectedIndex = parseInt(optionElement.dataset.index);
            this.answers[this.currentQuestion] = selectedIndex;

            // 添加过渡延迟后自动进入下一题
            setTimeout(() => {
                if (this.currentQuestion < this.questions.length - 1) {
                    this.goToQuestion(this.currentQuestion + 1);
                } else {
                    // 最后一题选择后显示结果
                    this.showResult();
                }
            }, 300);
        }
    }



    calculateResult() {
        // 统计A、B、C、D四个选项的选中次数
        const counts = { A: 0, B: 0, C: 0, D: 0 };
        
        this.answers.forEach(answer => {
            if (counts[answer] !== undefined) {
                counts[answer]++;
            }
        });

        // 找出最高得分
        const maxScore = Math.max(counts.A, counts.B, counts.C, counts.D);
        
        // 检查是否平局（如2A2B2C2D）
        const scoreValues = Object.values(counts);
        const isAllEqual = scoreValues.every(score => score === scoreValues[0]);
        
        if (isAllEqual) {
            // 平局时匹配格莱面具（result5）
            return this.results['result5'];
        }

        // 找出得分最高的特质
        let dominant = '';
        if (counts.A === maxScore) dominant = 'A';
        else if (counts.B === maxScore) dominant = 'B';
        else if (counts.C === maxScore) dominant = 'C';
        else dominant = 'D';

        // 根据主导特质匹配结果
        let possibleResults = [];
        if (dominant === 'A') {
            possibleResults = ['result1', 'result2']; // 守护与力量
        } else if (dominant === 'B') {
            possibleResults = ['result3', 'result4']; // 智慧与精神
        } else if (dominant === 'C') {
            possibleResults = ['result5', 'result6']; // 沟通与平衡
        } else if (dominant === 'D') {
            possibleResults = ['result7', 'result8']; // 治愈与自然
        }

        // 使用答案序列的哈希值来选择具体结果，增加多样性
        const hash = this.answers.join('').split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const resultKey = possibleResults[hash % possibleResults.length];
        
        return this.results[resultKey];
    }

    showResult() {
        const result = this.calculateResult();
        
        // 更新结果页面内容
        const resultImage = document.getElementById('resultMaskImage');
        const resultName = document.getElementById('resultMaskName');
        const resultTitle = document.getElementById('resultMaskTitle');
        const resultTribe = document.getElementById('resultMaskTribe');
        const resultTrait = document.getElementById('resultTrait');
        const resultStrength = document.getElementById('resultStrength');
        const resultSkill = document.getElementById('resultSkill');
        const resultDescription = document.getElementById('resultDescription');

        if (resultImage) resultImage.src = result.image || 'photo/mask-placeholder.png';
        if (resultName) resultName.textContent = result.name || '';
        if (resultTitle) resultTitle.textContent = result.title || '';
        if (resultTribe) resultTribe.textContent = result.tribe || '';
        if (resultTrait) resultTrait.textContent = result.trait || '';
        if (resultStrength) resultStrength.textContent = result.strength || '';
        if (resultSkill) resultSkill.textContent = result.skill || '';
        if (resultDescription) resultDescription.textContent = result.description || '';

        // 更新特质标签
        const traitsContainer = document.getElementById('resultTraits');
        if (traitsContainer && result.traits) {
            traitsContainer.innerHTML = '';
            result.traits.forEach(trait => {
                const tag = document.createElement('span');
                tag.className = 'trait-tag';
                tag.textContent = trait;
                traitsContainer.appendChild(tag);
            });
        }

        // 显示结果页面
        this.showScreen('gameResult');
    }

    retakeTest() {
        this.startTest();
    }

    shareResult() {
        const result = this.calculateResult();
        const shareText = `我在"面具之魂"测试中的结果是：${result.name} - ${result.tribe}！${result.description.substring(0, 50)}...`;
        
        if (navigator.share) {
            navigator.share({
                title: '面具之魂测试结果',
                text: shareText,
                url: window.location.href
            }).catch(() => {
                // 用户取消分享或出错
            });
        } else {
            // 复制到剪贴板
            navigator.clipboard.writeText(shareText).then(() => {
                alert('测试结果已复制到剪贴板！');
            });
        }
    }
}

// 页面加载完成后初始化游戏
document.addEventListener('DOMContentLoaded', () => {
    new MaskTest();
});