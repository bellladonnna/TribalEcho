// 面具测试游戏逻辑
class MaskTest {
    constructor() {
        this.currentQuestion = 0;
        this.answers = [];
        this.isTransitioning = false;
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.results = {
            'Baoule Mask': {
                name: 'Baoule Mask',
                tribe: '巴乌勒族面具',
                image: 'https://i.pinimg.com/736x/0f/b6/67/0fb66746251c49b2c0cb1bdc27e191f1.jpg',
                description: '巴乌勒族面具象征着优雅、智慧和内在美。作为西非重要的民族之一，巴乌勒人相信面具能够连接人类与精神世界。你如同这面精美的面具，拥有细腻的情感和深刻的洞察力，能够在复杂的环境中保持优雅和平衡。',
                traits: ['优雅', '智慧', '敏感', '艺术性', '内敛']
            },
            'Chokwe Mask': {
                name: 'Chokwe Mask',
                tribe: '乔科维族面具',
                image: 'https://i.pinimg.com/1200x/b6/8e/ba/b68eba0b0851e08316d0809794bd6f9a.jpg',
                description: '乔科维族面具代表着勇气、领导力和冒险精神。这个位于安哥拉和赞比亚的民族以其精湛的木雕技艺闻名。你具有天生的领袖气质，敢于面对挑战，保护你所爱的人，同时保持着对未知世界的好奇心。',
                traits: ['勇敢', '领导力', '冒险', '保护欲', '探索精神']
            },
            'Mende Mask': {
                name: 'Mende Mask',
                tribe: '门德族面具',
                image: 'https://i.pinimg.com/1200x/18/25/b9/1825b91e026f70135b26953a1c3bbe46.jpg',
                description: '门德族的Sowei面具体现着女性的力量、智慧和社会和谐。作为塞拉利昂最大的民族之一，门德族的女性社会有着深厚的文化传统。你拥有强大的内在力量和敏锐的社会意识，能够凝聚团队，创造和谐的环境。',
                traits: ['智慧', '社会性', '包容', '创造力', '责任感']
            },
            'Dogon Mask': {
                name: 'Dogon Mask',
                tribe: '多贡族面具',
                image: 'https://i.pinimg.com/736x/34/26/96/3426968b834429fa240ab58108461557.jpg',
                description: '多贡族面具承载着古老的知识、宇宙观和精神追求。这个居住在马里悬崖上的民族拥有复杂的天文知识和丰富的神话体系。你对神秘事物充满好奇，追求精神层面的成长，有着独特的思维方式。',
                traits: ['神秘', '求知欲', '哲学思维', '独特', '精神追求']
            },
            'Yoruba Mask': {
                name: 'Yoruba Mask',
                tribe: '约鲁巴族面具',
                image: 'https://i.pinimg.com/736x/e4/bf/df/e4bfdfa397b5b0db20ff5cee99f443c9.jpg',
                description: '约鲁巴族面具充满活力、创造力和神性。作为尼日利亚最大的民族，约鲁巴人有着丰富的艺术传统和复杂的宗教信仰。你充满生机与创造力，能够在平凡中发现美，给身边的人带来正能量。',
                traits: ['活力', '创造力', '乐观', '感染力', '艺术天赋']
            },
            'Ashanti Mask': {
                name: 'Ashanti Mask',
                tribe: '阿散蒂族面具',
                image: 'https://i.pinimg.com/736x/45/78/12/457812a8b5c6f3d2e9f4a1b2c3d4e5f6.jpg',
                description: '阿散蒂族面具代表着财富、权力和荣耀。加纳的阿散蒂王国曾经是西非最强大的帝国之一。你具有强烈的自尊心和成就感，追求卓越，同时懂得如何运用自己的影响力。',
                traits: ['自信', '追求卓越', '影响力', '决断力', '责任感']
            },
            'Benin Mask': {
                name: 'Benin Mask',
                tribe: '贝宁王国面具',
                image: 'https://i.pinimg.com/736x/67/89/01/678901a2b3c4d5e6f7a8b9c0d1e2f3g4.jpg',
                description: '贝宁王国面具体现着艺术、历史和文化传承。这个位于尼日利亚南部的古老王国以其精美的青铜和象牙工艺品闻名。你珍视传统，注重细节，有着深厚的文化修养和艺术品味。',
                traits: ['文化修养', '艺术品味', '传承', '精细', '历史感']
            },
            'Zulu Mask': {
                name: 'Zulu Mask',
                tribe: '祖鲁族面具',
                image: 'https://i.pinimg.com/736x/78/90/12/789012b3c4d5e6f7a8b9c0d1e2f3g4h5.jpg',
                description: '祖鲁族面具象征着力量、团结和民族自豪。南非的祖鲁族以其强大的军事传统和独特的文化闻名。你有着强烈的团队精神，忠诚可靠，在面对困难时能够团结他人，共同克服挑战。',
                traits: ['团结', '忠诚', '力量', '责任感', '民族自豪']
            },
            'Igbo Mask': {
                name: 'Igbo Mask',
                tribe: '伊博族面具',
                image: 'https://i.pinimg.com/736x/89/01/23/890123c4d5e6f7a8b9c0d1e2f3g4h5i6.jpg',
                description: '伊博族面具体现着智慧、商业头脑和适应性。尼日利亚的伊博族以其商业才能和教育传统闻名。你聪明敏锐，善于学习和适应新环境，有着出色的商业头脑和沟通能力。',
                traits: ['智慧', '适应力', '商业头脑', '沟通', '学习能力']
            },
            'Maasai Mask': {
                name: 'Maasai Mask',
                tribe: '马赛族面具',
                image: 'https://i.pinimg.com/736x/90/12/34/901234d5e6f7a8b9c0d1e2f3g4h5i6j7.jpg',
                description: '马赛族面具代表着自由、传统和与自然的和谐。肯尼亚和坦桑尼亚的马赛族以其独特的生活方式和对传统的坚守闻名。你热爱自由，尊重自然，有着坚定的价值观和独特的生活态度。',
                traits: ['自由', '自然', '传统', '坚定', '独特']
            }
        };

        this.questions = [
            {
                id: 1,
                text: "你如何看待自己在社群中的角色？",
                options: [
                    { text: "守护者。 我本能地保护身边的人，维护秩序与正义，是大家信赖的依靠。", image: "https://i.pinimg.com/736x/0f/b6/67/0fb66746251c49b2c0cb1bdc27e191f1.jpg" },
                    { text: "智者。 我乐于思考与传授知识，是连接过去与未来的桥梁，常为他人指引方向。", image: "https://i.pinimg.com/1200x/b6/8e/ba/b68eba0b0851e08316d0809794bd6f9a.jpg" },
                    { text: "沟通者。 我擅长协调矛盾，传递信息，是促进群体和谐与理解的纽带。", image: "https://i.pinimg.com/1200x/18/25/b9/1825b91e026f70135b26953a1c3bbe46.jpg" },
                    { text: "治愈者。 我充满同理心，能抚慰他人情绪，并热爱自然与生命的力量。", image: "https://i.pinimg.com/736x/34/26/96/3426968b834429fa240ab58108461557.jpg" }
                ]
            },
            {
                id: 2,
                text: "哪种力量最让你心生向往？",
                options: [
                    { text: "雄狮的勇气。 无畏、强大，拥有征服一切困难的决心。", image: "https://i.pinimg.com/736x/e4/bf/df/e4bfdfa397b5b0db20ff5cee99f443c9.jpg" },
                    { text: "猎豹的灵巧。 敏捷、精准，总能洞察先机，找到最佳路径。", image: "https://i.pinimg.com/736x/45/78/12/457812a8b5c6f3d2e9f4a1b2c3d4e5f6.jpg" },
                    { text: "大象的智慧。 沉稳、长寿，拥有古老的记忆和家族凝聚力。", image: "https://i.pinimg.com/736x/67/89/01/678901a2b3c4d5e6f7a8b9c0d1e2f3g4.jpg" },
                    { text: "雨水的滋养。 温柔、润养，能带来新生与希望。", image: "https://i.pinimg.com/736x/78/90/12/789012b3c4d5e6f7a8b9c0d1e2f3g4h5.jpg" }
                ]
            },
            {
                id: 3,
                text: "面对一个未知的挑战，你的第一反应是？",
                options: [
                    { text: "正面迎接。 制定计划，集结力量，直接而果断地解决问题。", image: "https://i.pinimg.com/736x/89/01/23/890123c4d5e6f7a8b9c0d1e2f3g4h5i6.jpg" },
                    { text: "深入洞察。 先观察、分析，理解其本质和规律，再寻求破解之道。", image: "https://i.pinimg.com/736x/90/12/34/901234d5e6f7a8b9c0d1e2f3g4h5i6j7.jpg" },
                    { text: "寻求协作。 联系同伴，交换信息，集合众人的智慧共同面对。", image: "https://i.pinimg.com/736x/01/23/45/012345e6f7a8b9c0d1e2f3g4h5i6j7k8.jpg" },
                    { text: "顺应节奏。 调整自身状态，像水一样流动，在适应中找到机会。", image: "https://i.pinimg.com/736x/12/34/56/123456e6f7a8b9c0d1e2f3g4h5i6j7k8l9.jpg" }
                ]
            },
            {
                id: 4,
                text: "你希望他人如何记住你？",
                options: [
                    { text: "一个强大的传奇。 我的存在本身，就是一种力量和庇护。", image: "https://i.pinimg.com/736x/23/45/67/234567e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0.jpg" },
                    { text: "一个智慧的源泉。 我的思想和话语，能持续启发后人。", image: "https://i.pinimg.com/736x/34/56/78/345678e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1.jpg" },
                    { text: " 一个和谐的象征。 我让世界变得更加包容与美好。", image: "https://i.pinimg.com/736x/45/67/89/456789e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2.jpg" },
                    { text: "一个生命的礼赞。 我带来了欢乐、治愈与连接。", image: "https://i.pinimg.com/736x/56/78/90/567890e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3.jpg" }
                ]
            },
            {
                id: 5,
                text: "在社交场合中，你通常是？",
                options: [
                    { text: "话题主导者。 能自然地引领对话节奏，气场强大。", image: "https://i.pinimg.com/736x/67/89/01/678901e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4.jpg" },
                    { text: "深度剖析者。 喜欢进行有意义的对话，并提出独特见解。", image: "https://i.pinimg.com/736x/78/90/12/789012e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5.jpg" },
                    { text: "氛围调节者。 关注每个人的感受，确保场面和谐愉快。", image: "https://i.pinimg.com/736x/89/01/23/890123e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6.jpg" },
                    { text: "安静倾听者。 善于理解他人，并提供温暖的陪伴和支持。", image: "https://i.pinimg.com/736x/90/12/34/901234e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7.jpg" }
                ]
            },
            {
                id: 6,
                text: "你更偏爱哪种创作方式？",
                options: [
                    { text: "构建宏大的体系。 比如策划一个项目，搭建一个清晰的框架。", image: "https://i.pinimg.com/736x/01/23/45/012345e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8.jpg" },
                    { text: "解构复杂的概念。 比如研究理论，将抽象事物具象化。", image: "https://i.pinimg.com/736x/12/34/56/123456e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9.jpg" },
                    { text: "编织精妙的故事。 比如通过叙述来连接人与人之间的情感。", image: "https://i.pinimg.com/736x/23/45/67/234567e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0.jpg" },
                    { text: "感受即兴的灵感。 比如随心的涂鸦、音乐或舞蹈，表达瞬间的情绪。", image: "https://i.pinimg.com/736x/34/56/78/345678e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1.jpg" }
                ]
            },
            {
                id: 7,
                text: "你认为什么是理想的社区？",
                options: [
                    { text: "纪律严明的堡垒。 安全、有序，拥有强大的防御和规则。", image: "https://i.pinimg.com/736x/45/67/89/456789e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2.jpg" },
                    { text: "思想自由的学城。 鼓励探索知识，尊重智慧和创新。", image: "https://i.pinimg.com/736x/56/78/90/567890e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3.jpg" },
                    { text: "平等互助的联盟。 没有隔阂，人们通过沟通达成共识。", image: "https://i.pinimg.com/736x/67/89/01/678901e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a4.jpg" },
                    { text: "亲近自然的部落。 与环境和诸共处，生活节奏顺应天地。", image: "https://i.pinimg.com/736x/78/90/12/789012e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b5.jpg" }
                ]
            },
            {
                id: 8,
                text: "你如何定义自己的“美”？",
                options: [
                    { text: "力量之美。 体现在坚韧、果断和实际的成就上。", image: "https://i.pinimg.com/736x/89/01/23/890123e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c6.jpg" },
                    { text: "智慧之美。 体现在深邃的思想、洞察力和创造力上。", image: "https://i.pinimg.com/736x/90/12/34/901234e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d7.jpg" },
                    { text: "和谐之美。 体现在优雅的举止、得体的言行和平衡感上。", image: "https://i.pinimg.com/736x/01/23/45/012345e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e8.jpg" },
                    { text: "本真之美。 体现在质朴的内心、真实的情感和生命力上。", image: "https://i.pinimg.com/736x/12/34/56/123456e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f9.jpg" }
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
        // 根据答案计算结果
        // 这里使用简单的计算方法，可以根据需要调整
        const resultKeys = Object.keys(this.results);
        let score = 0;
        
        this.answers.forEach(answer => {
            score += answer;
        });

        // 根据分数选择结果
        const resultIndex = Math.floor((score / (this.questions.length * 3)) * resultKeys.length);
        return this.results[resultKeys[Math.min(resultIndex, resultKeys.length - 1)]];
    }

    showResult() {
        const result = this.calculateResult();
        
        // 更新结果页面内容
        document.getElementById('resultMaskImage').src = result.image;
        document.getElementById('resultMaskName').textContent = result.name;
        document.getElementById('resultMaskTribe').textContent = result.tribe;
        document.getElementById('resultDescription').textContent = result.description;

        // 更新特质标签
        const traitsContainer = document.getElementById('resultTraits');
        traitsContainer.innerHTML = '';
        result.traits.forEach(trait => {
            const tag = document.createElement('span');
            tag.className = 'trait-tag';
            tag.textContent = trait;
            traitsContainer.appendChild(tag);
        });

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