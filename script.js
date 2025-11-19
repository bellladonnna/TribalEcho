// ========== 模拟数据 ==========
const articlesData = [
    {
        id: 1,
        category: 'Graphic Design',
        title: 'Bold typography takes center stage in Studio Makgill\'s rebrand for cultural venue',
        excerpt: 'The Glasgow-based design studio creates a flexible identity system that celebrates the venue\'s diverse programming and community focus.',
        author: 'Emma Tucker',
        date: '2025-01-15',
        image: 'https://i.pinimg.com/736x/28/28/df/2828df24c3812ce706dc972e9ea564c0.jpg'
    },
    {
        id: 2,
        category: 'Photography',
        title: 'Capturing the essence of urban life through intimate street photography',
        excerpt: 'A new exhibition showcases candid moments from cities around the world, highlighting the beauty in everyday interactions.',
        author: 'James Wilson',
        date: '2025-01-14',
        image: 'https://i.pinimg.com/1200x/94/a3/f1/94a3f14b9b5e8dce4021dd69855158c4.jpg'
    },
    {
        id: 3,
        category: 'Illustration',
        title: 'Vibrant illustrations bring children\'s book to life with magical detail',
        excerpt: 'An award-winning illustrator discusses her process for creating enchanting worlds that captivate young readers.',
        author: 'Sophie Chen',
        date: '2025-01-13',
        image: 'https://i.pinimg.com/1200x/50/84/92/5084920569d5b68b2c16860b38ade283.jpg'
    },
    {
        id: 4,
        category: 'Art',
        title: 'Exploring the boundaries between digital and physical in contemporary sculpture',
        excerpt: 'A rising artist combines 3D printing with traditional techniques to question our relationship with technology.',
        author: 'Michael Brown',
        date: '2025-01-12',
        image: 'https://i.pinimg.com/1200x/19/b1/55/19b155070168c164ada675d98d1d5437.jpg'
    },
    {
        id: 5,
        category: 'Graphic Design',
        title: 'Minimalist packaging design wins international award for sustainability',
        excerpt: 'A London studio\'s eco-conscious approach to product design sets a new standard for the industry.',
        author: 'Rachel Green',
        date: '2025-01-11',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop'
    },
    {
        id: 6,
        category: 'Photography',
        title: 'Documenting endangered cultures before they disappear',
        excerpt: 'A photojournalist\'s ten-year project captures traditional ways of life threatened by modernization.',
        author: 'David Martinez',
        date: '2025-01-10',
        image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=500&fit=crop'
    }
];

const projectsData = [
    {
        id: 1,
        title: 'Abstract Forms in Motion',
        author: 'Sarah Johnson',
        image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=450&fit=crop'
    },
    {
        id: 2,
        title: 'Retro Future Poster Series',
        author: 'Tom Anderson',
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=450&fit=crop'
    },
    {
        id: 3,
        title: 'Nature Photography Collection',
        author: 'Lisa Wang',
        image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600&h=450&fit=crop'
    },
    {
        id: 4,
        title: 'Brand Identity for Tech Startup',
        author: 'Alex Morgan',
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=450&fit=crop'
    },
    {
        id: 5,
        title: 'Experimental Typography Study',
        author: 'Nina Patel',
        image: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=600&h=450&fit=crop'
    },
    {
        id: 6,
        title: 'Architectural Photography Series',
        author: 'Chris Lee',
        image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=450&fit=crop'
    }
];

const mustReadsData = [
    {
        id: 1,
        title: 'The Future of Design Education',
        author: 'Editorial Team',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=450&fit=crop'
    },
    {
        id: 2,
        title: 'Creative Industry Trends 2025',
        author: 'Industry Insights',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=450&fit=crop'
    },
    {
        id: 3,
        title: 'Building a Sustainable Practice',
        author: 'Green Design',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=450&fit=crop'
    }
];

// ========== DOM 元素 ==========
let header, menuToggle, dropdownMenu, dropdownOverlay, searchBtn, searchPanel, searchClose;
let articleList, projectGrid, mustReadsGrid, loadMoreBtn, newsletterForm, bottomSearchBtn, backToTopBtn;

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
    loadMoreBtn = document.getElementById('loadMoreBtn');
    newsletterForm = document.getElementById('newsletterForm');
    bottomSearchBtn = document.getElementById('bottomSearchBtn');
    backToTopBtn = document.getElementById('backToTop');
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
    
    if (bottomSearchBtn) {
        bottomSearchBtn.addEventListener('click', openSearch);
    }
    
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
                    <span class="article-date">${formatDate(article.date)}</span>
                </div>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <p class="article-author">By <strong>${article.author}</strong></p>
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
function renderProjects(projects) {
    if (!projectGrid) return;
    
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.transitionDelay = `${index * 0.1}s`;
        projectCard.style.cursor = 'pointer';
        
        projectCard.innerHTML = `
            <div class="project-image-wrapper">
                <img src="${project.image}" alt="${project.title}" class="project-image">
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-author">${project.author}</p>
        `;
        
        // 添加点击事件跳转到详情页面
        projectCard.addEventListener('click', () => {
            window.location.href = `project-detail.html?id=${project.id}`;
        });
        
        projectGrid.appendChild(projectCard);
    });
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
            <p class="project-author">${read.author}</p>
        `;
        
        // 添加点击事件跳转到文章详情页面
        card.addEventListener('click', () => {
            window.location.href = `article-detail.html?id=${read.id}`;
        });
        
        mustReadsGrid.appendChild(card);
    });
}

// ========== 日期格式化 ==========
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
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
let currentArticleIndex = 4; // 已经显示了前4篇

function setupLoadMoreButton() {
    if (!loadMoreBtn) return;
    
    loadMoreBtn.addEventListener('click', () => {
        // 计算还有多少文章未显示
        const remainingArticles = articlesData.length - currentArticleIndex;
        
        if (remainingArticles > 0) {
            // 每次加载2篇文章
            const articlesToLoad = Math.min(2, remainingArticles);
            const moreArticles = articlesData.slice(currentArticleIndex, currentArticleIndex + articlesToLoad);
            
            // 添加加载动画
            loadMoreBtn.textContent = 'Loading...';
            loadMoreBtn.disabled = true;
            
            setTimeout(() => {
                renderArticles(moreArticles);
                currentArticleIndex += articlesToLoad;
                
                // 延迟观察新加载的卡片
                setTimeout(() => {
                    observeCards();
                }, 100);
                
                // 如果所有文章都已加载，隐藏按钮
                if (currentArticleIndex >= articlesData.length) {
                    loadMoreBtn.textContent = 'All Articles Loaded';
                    setTimeout(() => {
                        loadMoreBtn.style.display = 'none';
                    }, 1000);
                } else {
                    loadMoreBtn.textContent = 'Load More';
                    loadMoreBtn.disabled = false;
                }
            }, 800);
        }
    });
}

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
        
        if (header && currentScroll > 100) {
            header.classList.add('scrolled');
        } else if (header) {
            header.classList.remove('scrolled');
        }
    }, 100);

    window.addEventListener('scroll', handleScroll);
}

// ========== 主初始化函数 ==========
function init() {
    // 初始化DOM元素
    initializeDOM();
    
    // 渲染初始内容 - The Nice Feed 只显示前4篇
    renderArticles(articlesData.slice(0, 4));
    renderProjects(projectsData);
    renderMustReads(mustReadsData);
    
    // 设置事件监听器
    setupScrollHandlers();
    setupBackToTop();
    setupDropdownMenu();
    setupSearchPanel();
    setupLoadMoreButton();
    setupNewsletterForm();
    setupSmoothScroll();
    setupOptimizedScroll();
    
    // 延迟观察卡片以触发动画
    setTimeout(() => {
        observeCards();
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