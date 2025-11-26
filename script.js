// ========== 模拟数据 ==========
const tribesData = {
    baoule: [
        {
            id: 1,
            category: 'Mask',
            title: 'Kple Kple',
            excerpt: 'Kple Kple面具在goli舞会中第一个出场，是由青年佩戴的，与部落保护神有关。脸部呈圆形，象征月亮，眼睛和嘴巴为浮雕，面具上方为两个公羊角。',
            image: 'https://i.pinimg.com/736x/28/28/df/2828df24c3812ce706dc972e9ea564c0.jpg'
        },
        {
            id: 2,
            category: 'Mask',
            title: 'Goli Glin',
            excerpt: 'Goli Glin面具为动物头盔，在goli舞会中第二个出场，由男性佩戴，面具融合了灌木牛、羚羊和鳄鱼的形象，象征力量、amwim丛林精灵和森林水牛。',
            image: 'https://i.pinimg.com/1200x/94/a3/f1/94a3f14b9b5e8dce4021dd69855158c4.jpg'
        },
        {
            id: 3,
            category: 'Mask',
            title: 'Kpan Pre',
            excerpt: 'Kpan Pre面具代表的是女性，在goli舞会中第三个出场，面具周围环绕扁平锯齿状的圆盘状胡须，头顶是一对巨大的角以及牛耳。',
            image: 'https://i.pinimg.com/1200x/50/84/92/5084920569d5b68b2c16860b38ade283.jpg'
        },
        {
            id: 4,
            category: 'Mask',
            title: 'Kpan',
            excerpt: '面具代表着年长的女性，是goli舞会的最后环节，椭圆脸，圆额头，拱形的眉毛，厚重的眼睑，眼睛几乎闭着，一个细长的鼻子在张开的嘴巴上露出牙齿。',
            image: 'https://i.pinimg.com/1200x/19/b1/55/19b155070168c164ada675d98d1d5437.jpg'
        }
    ],
    chokwe: [
        {
            id: 5,
            category: 'Mask',
            title: 'Mwana Pwo',
            excerpt: 'Mwana Pwo面具代表年轻的女性形象，体现了Chokwe文化中对女性美丽和理想的象征。面具特征包括精致的发型、细长的眼睛和优雅的面部轮廓。',
            image: 'https://i.pinimg.com/736x/4d/f3/ca/4df3ca960b8f4616acdc9eb4c2b8215f.jpg'
        },
        {
            id: 6,
            category: 'Mask',
            title: 'Pwo',
            excerpt: 'Pwo面具是Chokwe文化中重要的女性面具，象征着成熟女性的智慧和美德。面具设计强调女性的美丽和社会地位，在重要仪式中使用。',
            image: 'https://art-africain-traditionnel.com/14063-large_default/chokwe-pwo-mask.jpg'
        },
        {
            id: 7,
            category: 'Mask',
            title: 'Cihongo',
            excerpt: 'Cihongo面具是Chokwe文化中的男性面具，代表权力、权威和财富。面具特征包括大眼睛、宽鼻和装饰性的胡须，象征男性的力量和社会地位。',
            image: 'https://i.pinimg.com/1200x/91/ea/a5/91eaa5401e5d2e91a54fe5e6e00deb4a.jpg'
        }
    ],
    mende: [
        {
            id: 9,
            category: 'Mask',
            title: 'Sowei Mask',
            excerpt: 'Sowei面具是Mende文化中最神圣的面具之一，由Sande社会在女性成年仪式中使用。面具特征包括光滑的皮肤、小嘴巴和环形的颈部，代表女性的美丽和纯洁。',
            image: 'https://i.pinimg.com/1200x/6f/ef/3a/6fef3abf74d1e66f1ed5b163aa03de51.jpg'
        }
    ]
};

// 保持向后兼容
const articlesData = [...tribesData.baoule];

// 为文章数据添加标签
tribesData.baoule.forEach(article => {
    if (article.id === 1) {
        article.tags = ['科特迪瓦', 'Baoule', '面具'];
    } else if (article.id === 2) {
        article.tags = ['仪式', '表演', '面具'];
    } else if (article.id === 3) {
        article.tags = ['古代', '舞蹈', '传统'];
    } else if (article.id === 4) {
        article.tags = ['传统', '舞蹈', '基础'];
    }
});

tribesData.chokwe.forEach(article => {
    if (article.id === 5) {
        article.tags = ['Chokwe', 'Angola', '女性面具'];
    } else if (article.id === 6) {
        article.tags = ['Chokwe', '安哥拉', '仪式面具'];
    } else if (article.id === 7) {
        article.tags = ['Chokwe', '雕像', '神圣面具'];
    } else if (article.id === 8) {
        article.tags = ['Chokwe', '舞蹈', '面具'];
    }
});

tribesData.mende.forEach(article => {
    if (article.id === 9) {
        article.tags = ['Mende', '塞拉利昂', '女性面具'];
    } else if (article.id === 10) {
        article.tags = ['Mende', '仪式', '面具'];
    } else if (article.id === 11) {
        article.tags = ['Mende', '雕像', '权力'];
    } else if (article.id === 12) {
        article.tags = ['Mende', '战士', '面具'];
    }
});

const projectsData = [
    {
        id: 1,
        title: 'Shekere',
        category: 'Music',
        excerpt: '谢克雷是一种手持打击乐器，由干燥的葫芦包裹在珠子或贝壳网中制成。',
        image: 'https://i.pinimg.com/736x/0c/56/30/0c5630b6374029f4dfae4f114c2bf245.jpg',
        tags: ['乐器', '打击乐', '非洲', '传统']
    },
    {
        id: 2,
        title: 'Djembe',
        category: 'Music',
        excerpt: '金贝鼓是用手演奏的，能发出多样深沉、富有表现力的声音。',
        image: 'https://i.etsystatic.com/24801246/r/il/60c0dd/5849560065/il_1588xN.5849560065_jqpe.jpg',
        tags: ['鼓', '打击乐', '西非', '节奏']
    },
    {
        id: 3,
        title: 'Kpanlogo',
        category: 'Music',
        excerpt: '克潘洛戈鼓以其清脆、独特的音色闻名，适合舞蹈和节日活动中使用。',
        image: 'https://idrumgh.com/cdn/shop/files/17_b189b39b-9b7c-4e33-a2fb-12737e23fdd4_1800x1800.webp?v=1688703111',
        tags: ['鼓', '节日', '庆典', '舞蹈']
    },
    {
        id: 4,
        title: 'Talking Drum',
        category: 'Music',
        excerpt: '会说话的鼓，或称dùndún，可以调音以模仿人类语音的音调和节奏，用弯曲的鼓棒演奏。',
        image: 'https://i.pinimg.com/736x/3e/ea/9f/3eea9f8f3ab7d872c0e48244927d66ec.jpg'
    }
];

const mustReadsData = [
    {
        id: 1,
        title: 'The Future of Design Education',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=450&fit=crop'
    },
    {
        id: 2,
        title: 'Creative Industry Trends 2025',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=450&fit=crop'
    },
    {
        id: 3,
        title: 'Building a Sustainable Practice',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=450&fit=crop'
    }
];

// ========== DOM 元素 ==========
let header, menuToggle, dropdownMenu, dropdownOverlay, searchBtn, searchPanel, searchClose;
let articleList, projectGrid, mustReadsGrid, newsletterForm, backToTopBtn;
let tribeNavLinks, baouleGroup, chokweGroup, mendeGroup;

// ========== 初始化函数 - 在DOM加载后获取所有元素 ==========
function initializeDOM() {
    // 获取所有DOM元素
    header = document.getElementById('header');
    menuToggle = document.getElementById('menuToggle');
    dropdownMenu = document.getElementById('dropdownMenu');
    dropdownOverlay = document.getElementById('dropdownOverlay');
    searchBtn = document.getElementById('searchBtn');
    searchPanel = document.getElementById('searchPanel');
    searchClose = document.getElementById('searchClose');
    articleList = document.getElementById('articleList');
    projectGrid = document.getElementById('projectGrid');
    mustReadsGrid = document.getElementById('mustReadsGrid');
    newsletterForm = document.getElementById('newsletterForm');

    backToTopBtn = document.getElementById('backToTop');
    
    // 获取部落切换相关元素
    tribeNavLinks = document.querySelectorAll('.section-nav-link[data-tribe]');
    baouleGroup = document.getElementById('baouleGroup');
    chokweGroup = document.getElementById('chokweGroup');
    mendeGroup = document.getElementById('mendeGroup');
}

// ========== 导航栏滚动效果 & 返回顶部按钮 ==========
let lastScroll = 0;

function setupScrollHandlers() {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (header && currentScroll > 100) {
            header.classList.add('scrolled');
        } else if (header) {
            header.classList.remove('scrolled');
        }
        
        // 显示/隐藏返回顶部按钮
        if (backToTopBtn && currentScroll > 300) {
            backToTopBtn.classList.add('visible');
        } else if (backToTopBtn) {
            backToTopBtn.classList.remove('visible');
        }
        
        lastScroll = currentScroll;
    });
}

// ========== 返回顶部功能 ==========
function setupBackToTop() {
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ========== 部落导航功能 ==========
function setupTribeNavigation() {
    if (!tribeNavLinks || tribeNavLinks.length === 0) return;
    
    tribeNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tribe = link.dataset.tribe;
            switchTribe(tribe);
            
            // 更新active状态
            tribeNavLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

function switchTribe(tribe) {
    // 隐藏所有部落组
    if (baouleGroup) {
        baouleGroup.style.display = 'none';
        baouleGroup.querySelectorAll('.article-card').forEach(card => {
            card.classList.remove('visible');
        });
    }
    if (chokweGroup) {
        chokweGroup.style.display = 'none';
        chokweGroup.querySelectorAll('.article-card').forEach(card => {
            card.classList.remove('visible');
        });
    }
    if (mendeGroup) {
        mendeGroup.style.display = 'none';
        mendeGroup.querySelectorAll('.article-card').forEach(card => {
            card.classList.remove('visible');
        });
    }
    
    // 显示选中的部落组
    let targetGroup;
    switch (tribe) {
        case 'baoule':
            targetGroup = baouleGroup;
            break;
        case 'chokwe':
            targetGroup = chokweGroup;
            break;
        case 'mende':
            targetGroup = mendeGroup;
            break;
    }
    
    if (targetGroup) {
        targetGroup.style.display = 'block';
        // 触发动画
        setTimeout(() => {
            observeNewCards(targetGroup);
        }, 100);
    }
}

function renderTribeArticles(tribe, articles) {
    let targetList;
    switch (tribe) {
        case 'chokwe':
            targetList = document.getElementById('chokweArticleList');
            break;
        case 'mende':
            targetList = document.getElementById('mendeArticleList');
            break;
        default:
            return;
    }
    
    if (!targetList) return;
    
    targetList.innerHTML = '';
    targetList.className = 'article-list';
    
    articles.forEach((article, index) => {
        const articleCard = document.createElement('article');
        // 为Chokwe和Mende组的卡片添加特殊的类名
        articleCard.className = tribe === 'chokwe' || tribe === 'mende' ? 'article-card dark-theme' : 'article-card';
        articleCard.style.transitionDelay = `${index * 0.1}s`;
        articleCard.style.cursor = 'pointer';
        
        articleCard.innerHTML = `
            <div class="article-image-wrapper">
                <img src="${article.image}" alt="${article.title}" class="article-image">
            </div>
            <div class="article-content">
                <div class="article-meta">
                    <span class="article-category">${article.category}</span>
                </div>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-tags">
                    ${article.tags ? article.tags.map(tag => `<span class="article-tag">${tag}</span>`).join('') : ''}
                </div>
            </div>
        `;
        
        // 添加点击事件跳转到详情页面
        articleCard.addEventListener('click', () => {
            window.location.href = `article-detail.html?id=${article.id}`;
        });
        
        targetList.appendChild(articleCard);
    });
}

function observeNewCards(container) {
    const cards = container.querySelectorAll('.article-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 100);
    });
}

// ========== 下拉菜单切换 ==========
function updateDropdownPosition() {
    if (!header || !dropdownMenu) return;
    
    // 获取导航栏的实际位置
    const headerRect = header.getBoundingClientRect();
    const topPosition = headerRect.bottom;
    dropdownMenu.style.top = `${topPosition}px`;
}

function openDropdownMenu() {
    if (!dropdownMenu || !dropdownOverlay || !menuToggle) return;
    
    updateDropdownPosition();
    dropdownMenu.classList.add('active');
    dropdownOverlay.classList.add('active');
    menuToggle.classList.add('active');
}

function closeDropdownMenu() {
    if (!dropdownMenu || !dropdownOverlay || !menuToggle) return;
    
    dropdownMenu.classList.remove('active');
    dropdownOverlay.classList.remove('active');
    menuToggle.classList.remove('active');
}

function setupDropdownMenu() {
    if (!menuToggle || !dropdownOverlay) return;
    
    menuToggle.addEventListener('click', () => {
        if (dropdownMenu.classList.contains('active')) {
            closeDropdownMenu();
        } else {
            openDropdownMenu();
        }
    });

    dropdownOverlay.addEventListener('click', closeDropdownMenu);

    // 滚动时更新下拉菜单位置
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (dropdownMenu && dropdownMenu.classList.contains('active')) {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                updateDropdownPosition();
            }, 10);
        }
    });

    // 点击导航链接后关闭菜单
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeDropdownMenu);
    });
}

// ========== 搜索面板 ==========
function openSearch() {
    if (!searchPanel) return;
    
    searchPanel.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.focus();
        }
    }, 300);
}

function closeSearch() {
    if (!searchPanel) return;
    
    searchPanel.classList.remove('active');
    document.body.style.overflow = '';
}

function setupSearchPanel() {
    if (!searchBtn || !searchClose) return;
    
    searchBtn.addEventListener('click', openSearch);
    searchClose.addEventListener('click', closeSearch);

    // ESC 键关闭搜索
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchPanel && searchPanel.classList.contains('active')) {
            closeSearch();
        }
    });
}

// ========== 渲染文章卡片 ==========
function renderArticles(articles) {
    if (!articleList) return;
    
    // 清除现有内容
    articleList.innerHTML = '';
    
    articles.forEach((article, index) => {
        const articleCard = document.createElement('article');
        articleCard.className = 'article-card';
        articleCard.style.transitionDelay = `${index * 0.1}s`;
        articleCard.style.cursor = 'pointer';
        
        articleCard.innerHTML = `
            <div class="article-image-wrapper">
                <img src="${article.image}" alt="${article.title}" class="article-image">
            </div>
            <div class="article-content">
                <div class="article-meta">
                    <span class="article-category">${article.category}</span>
                </div>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-tags">
                    ${article.tags ? article.tags.map(tag => `<span class="article-tag">${tag}</span>`).join('') : ''}
                </div>
            </div>
        `;
        
        // 添加点击事件跳转到详情页面
        articleCard.addEventListener('click', () => {
            window.location.href = `article-detail.html?id=${article.id}`;
        });
        
        articleList.appendChild(articleCard);
    });
}

// ========== 渲染项目卡片 ==========
let currentProjectIndex = 0;

function renderProjects(projects, initialLoad = true) {
    if (!projectGrid) return;
    
    // 如果是初始加载，重置索引并清空容器
    if (initialLoad) {
        currentProjectIndex = 0;
        projectGrid.innerHTML = '';
    }
    
    // 计算要显示的项目数量
    const itemsToShow = initialLoad ? 4 : projects.length;
    const endIndex = Math.min(currentProjectIndex + itemsToShow, projects.length);
    
    // 渲染项目卡片
    for (let i = currentProjectIndex; i < endIndex; i++) {
        const project = projects[i];
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.transitionDelay = `${(i - currentProjectIndex) * 0.1}s`;
        projectCard.style.cursor = 'pointer';
        
        projectCard.innerHTML = `
            <div class="project-image-wrapper">
                <img src="${project.image}" alt="${project.title}" class="project-image">
            </div>
            <div class="project-content">
                <div class="project-meta">
                    <span class="project-category">${project.category || 'Project'}</span>
                </div>
                <h3 class="project-title">${project.title}</h3>
                ${project.excerpt ? `<p class="project-excerpt">${project.excerpt}</p>` : ''}
                <div class="project-tags">
                    ${project.tags ? project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('') : ''}
                </div>
            </div>
        `;
        
        // 添加点击事件跳转到详情页面
        projectCard.addEventListener('click', () => {
            window.location.href = `project-detail.html?id=${project.id}`;
        });
        
        projectGrid.appendChild(projectCard);
        
        // 延迟添加可见类以触发动画
        setTimeout(() => {
            projectCard.classList.add('visible');
        }, 100 + (i - currentProjectIndex) * 100);
    }
    
    // 更新当前索引
    currentProjectIndex = endIndex;
}
    


// ========== 渲染 Must Reads ==========
function renderMustReads(reads) {
    if (!mustReadsGrid) return;
    
    reads.forEach((read, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.transitionDelay = `${index * 0.1}s`;
        card.style.cursor = 'pointer';
        
        card.innerHTML = `
            <div class="project-image-wrapper">
                <img src="${read.image}" alt="${read.title}" class="project-image">
            </div>
            <h3 class="project-title">${read.title}</h3>
        `;
        
        // 添加点击事件跳转到文章详情页面
        card.addEventListener('click', () => {
            window.location.href = `article-detail.html?id=${read.id}`;
        });
        
        mustReadsGrid.appendChild(card);
    });
}



// ========== 滚动动画观察器 ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// ========== 观察所有卡片元素 ==========
function observeCards() {
    document.querySelectorAll('.article-card, .project-card').forEach(card => {
        observer.observe(card);
    });
}

// ========== 加载更多按钮 ==========




// ========== Newsletter 表单 ==========
function setupNewsletterForm() {
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 模拟订阅
        const submitBtn = newsletterForm.querySelector('.newsletter-btn');
        if (submitBtn) {
            submitBtn.textContent = 'Subscribed!';
            submitBtn.style.backgroundColor = '#4CAF50';
        }
        
        setTimeout(() => {
            if (submitBtn) {
                submitBtn.textContent = 'Subscribe';
                submitBtn.style.backgroundColor = '';
            }
            if (newsletterForm) {
                newsletterForm.reset();
            }
        }, 2000);
    });
}

// ========== 平滑滚动 ==========
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========== 图片懒加载错误处理 ==========
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.style.backgroundColor = '#f0f0f0';
        e.target.alt = 'Image placeholder';
    }
}, true);

// ========== 性能优化：节流函数 ==========
function throttle(func, wait) {
    let timeout;
    let previous = 0;
    
    return function() {
        const context = this;
        const args = arguments;
        const now = Date.now();
        const remaining = wait - (now - previous);
        
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args);
        } else if (!timeout) {
            timeout = setTimeout(() => {
                previous = Date.now();
                timeout = null;
                func.apply(context, args);
            }, remaining);
        }
    };
}

// ========== 优化滚动性能 ==========
function setupOptimizedScroll() {
    const handleScroll = throttle(() => {
        const currentScroll = window.pageYOffset;
        const topBanner = document.querySelector('.top-banner');
        const mainContent = document.querySelector('.main-content');
        const bannerHeight = topBanner ? topBanner.offsetHeight : 0;
        const headerHeight = getComputedStyle(document.documentElement)
            .getPropertyValue('--header-height').replace('px', '') || 70;
        
        // 当滚动超过banner高度时，导航栏固定
        if (currentScroll >= bannerHeight) {
            header.classList.add('scrolled');
            header.style.position = 'fixed';
            header.style.top = '0';
            
            // 主内容区添加padding以避免被导航栏覆盖
            if (mainContent) {
                mainContent.classList.add('header-fixed');
            }
        } else {
            header.classList.remove('scrolled');
            header.style.position = 'fixed';
            header.style.top = `${bannerHeight - currentScroll}px`;
            
            // 移除主内容区的padding
            if (mainContent) {
                mainContent.classList.remove('header-fixed');
            }
        }
        
        // 返回顶部按钮显示/隐藏
        if (backToTopBtn && currentScroll > 300) {
            backToTopBtn.classList.add('visible');
        } else if (backToTopBtn) {
            backToTopBtn.classList.remove('visible');
        }
    }, 16); // 提高响应性，约60fps

    window.addEventListener('scroll', handleScroll);
}

// ========== 主初始化函数 ==========
function init() {
    // 初始化DOM元素
    initializeDOM();
    
    // 强制清除缓存并重新渲染内容
    setTimeout(() => {
        // 确保Baoule组显示
        if (baouleGroup) {
            baouleGroup.style.display = 'block';
        }
        if (chokweGroup) {
            chokweGroup.style.display = 'none';
        }
        if (mendeGroup) {
            mendeGroup.style.display = 'none';
        }
        
        // 渲染初始内容 - Baoule组前4篇文章
        renderArticles(tribesData.baoule.slice(0, 4));
        renderProjects(projectsData);
        renderMustReads(mustReadsData);
        
        // 延迟渲染Chokwe和Mende的文章（但不显示）
        setTimeout(() => {
            renderTribeArticles('chokwe', tribesData.chokwe);
            renderTribeArticles('mende', tribesData.mende);
        }, 200);
    }, 100);
    
    // 设置事件监听器
    setupScrollHandlers();
    setupBackToTop();
    setupDropdownMenu();
    setupSearchPanel();
    setupTribeNavigation();

    setupNewsletterForm();
    setupSmoothScroll();
    setupOptimizedScroll();
    
    // 延迟观察卡片以触发动画
    setTimeout(() => {
        observeCards();
        // 确保Baoule组的卡片也显示动画
        if (baouleGroup) {
            observeNewCards(baouleGroup);
        }
    }, 100);
    
    // 添加页面加载动画
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}