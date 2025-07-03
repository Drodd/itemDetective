// 游戏数据
const gameData = {
    // 对话触发点位置配置（相对于背景图片的百分比位置，0-1之间的小数）
    // bottomPercent: 距离底部的百分比, leftPercent: 距离左侧的百分比, rightPercent: 距离右侧的百分比
    triggerPositions: {
        'wine-glasses': { bottomPercent: 0.4, leftPercent: 0.65 },
        'sofas': { bottomPercent: 0.07, leftPercent: 0.39 },
        'sofas2': { bottomPercent: 0.23, leftPercent: 0.83 },
        'door': { bottomPercent: 0.63, rightPercent: 0.18 },
        'bed': { bottomPercent: 0.35, leftPercent: 0.35 },
        'drink': { bottomPercent: 0.51, leftPercent: 0.08 },
        'floor': { bottomPercent: 0.07, leftPercent: 0.06 }
    },
    
    // 情节片段数据，每个触发点解锁的情节片段
    plotSegments: {
        'wine-glasses': [
            { id: 'wine1', text: '被害人和访客一起喝红酒', order: 4 },
            { id: 'wine2', text: '访客在红酒中下毒', order: 3 }
        ],
        'sofas': [
            { id: 'sofa1', text: '访客坐在单人沙发上', order: 2 }
        ],
        'sofas2': [
            { id: 'sofa2', text: '被害人和访客一起坐在双人沙发上', order: 7 }
        ],
        'door': [
            { id: 'door1', text: '第一位访客用力敲门', order: 1 },
            { id: 'door2', text: '第二位访客按门铃', order: 5 },
            { id: 'door3', text: '第三位访客撬锁', order: 9 }
        ],
        'bed': [
            { id: 'bed1', text: '被害人和访客在床上拥抱', order: 8 },
            { id: 'bed2', text: '被害人被人用枕头压头', order: 10 }
        ],
        'drink': [
            { id: 'drink1', text: '被害人收到放有安眠药的饮料', order: 0 }
        ],
        'floor': [
            { id: 'floor1', text: '穿高跟鞋的女士到访', order: 6 }
        ]
    },
    
    // 嫌疑人数据
    suspects: [
        { id: 'suspect1', name: '刘志强（商业仇敌）', isCorrect: true },
        { id: 'suspect2', name: '林小雨（秘密情人）', isCorrect: false },
        { id: 'suspect3', name: '张伟（快递员）', isCorrect: false }
    ],
    
    // 嫌疑人详细档案
    suspectProfiles: {
        1: {
            id: '01201121',
            name: '刘志强',
            gender: '男',
            age: 45,
            occupation: '建筑材料公司老板',
            relationship: '被害人在合同中使诈',
            photo: 'img_char1.png',
            statement: '不是我干的，我走的时候，他还好好的..'
        },
        2: {
            id: '01201122',
            name: '林小雨',
            gender: '女',
            age: 28,
            occupation: '高档会所公关经理',
            relationship: '被害人的秘密情人',
            photo: 'img_char2.png',
            statement: '我们只是普通的朋友关系，那晚我去找他谈工作的事情'
        },
        3: {
            id: '01201123',
            name: '张伟',
            gender: '男',
            age: 26,
            occupation: '快递员',
            relationship: '曾给被害人送过快递',
            photo: 'img_char3.png',
            statement: '我只是送快递的，送完就走了，不知道后面发生了什么'
        }
    },
    
    dialogues: {
        'wine-glasses': {
            title: '红酒杯的对话',
            content: [
                '红酒杯A："今晚这酒真香！我喝得可开心了～"',
                '红酒杯B："咦？我的酒怎么有点怪味？苦苦的，跟平时不一样诶..."',
                '红酒杯A："咦？你的酒和我的不一样吗？"',
                '红酒杯B："是啊，我的酒里好像有什么奇怪的东西，味道很苦涩..."'
            ]
        },
        'sofas': {
            title: '单人沙发的独白',
            content: [
                '单人沙发："差点没被那个胖子给压死。"',
            ]
        },
        'sofas2': {
            title: '双人沙发的独白',
            content: [
                '双人沙发："太欺负人了，空着隔壁的单人沙发不坐，非得两个人压在我身上。"',
            ]
        },
        'door': {
            title: '门和门锁的对话',
            content: [
                '门："妈的，今晚真遭罪。第一个家伙敲门跟砸门似的，疼死我了！"',
                '门锁："还有个坏蛋用铁丝捅我，疼死我了！我这把老骨头哪受得了这个！"',
                '门："对对对！第二个人倒是礼貌，按了门铃，但是第三个人..."',
                '门锁："第三个人太过分了！用撬锁工具硬生生把我弄开，我现在还疼着呢！"'
            ]
        },
        'bed': {
            title: '床和枕头的对话',
            content: [
                '床："又要失眠了，先是两个人在我身上恩恩爱爱..."',
                '枕头："然后就剩一个人躺着不动了，我还以为他睡着了呢..."',
                '床："最后又来一个人压在上面，把我压得不轻！"',
                '枕头："那个人用我闷住了躺着的人，但是奇怪的是，那个人早就没有反应了..."'
            ]
        },
        'drink': {
            title: '饮料罐的独白',
            content: [
                '饮料瓶："好困啊！哪个缺德的往我肚子里塞了白色药片..."',
                '"搞得我现在昏昏沉沉的，没人喝我也算了，还让我这么难受！"',
                '"我记得是一个穿制服的年轻人带来的，说是什么特殊快递..."',
                '"唉，我到现在还在床头柜上，一口都没被人喝过..."'
            ]
        },
        'floor': {
            title: '地板的独白',
            content: [
                '地板："哎呦，我的腰！今晚来了三个人，把我踩得够呛..."',
                '"第一个人脚步很重，咚咚咚的，像是很着急的样子..."',
                '"第二个人穿着高跟鞋，那鞋跟也太尖了，真是要了我的老命！"',
                '"第三个人倒是很轻，但是脚步很小心，像是在偷偷摸摸的..."'
            ]
        }
    }
};

// 游戏状态
let gameState = {
    triggeredDialogues: new Set(),
    unlockedSegments: [],
    currentSortOrder: [],
    savedSortOrder: [], // 保存的排序状态
    score: 0
};

// 场景拖拽相关
let isDragging = false;
let startX = 0;
let currentX = 0;
let sceneOffset = 0;

// 拖拽相关的全局变量
let draggedElement = null;
let draggedIndex = null;
let dropTarget = null;

// 开始游戏
function startGame() {
    // 隐藏首页，显示游戏界面
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'block';
    
    // 初始化游戏
    initGame();
}

// 初始化游戏
function initGame() {
    // 重置游戏状态
    gameState = {
        triggeredDialogues: new Set(),
        unlockedSegments: [],
        currentSortOrder: [],
        savedSortOrder: [],
        score: 0
    };
    
    // 重置选择的嫌疑人
    selectedSuspectId = null;
    
    // 重置触发点状态
    document.querySelectorAll('.dialogue-trigger').forEach(trigger => {
        trigger.classList.remove('triggered');
    });
    
    // 关闭所有模态框
    document.getElementById('dialogueModal').style.display = 'none';
    document.getElementById('plotModal').style.display = 'none';
    document.getElementById('suspectModal').style.display = 'none';
    document.getElementById('profileModal').style.display = 'none';
    document.getElementById('resultModal').style.display = 'none';
    
    // 重置场景位置
    const sceneImage = document.getElementById('sceneImage');
    const triggersContainer = document.getElementById('triggersContainer');
    
    if (sceneImage && triggersContainer) {
        sceneImage.style.left = '0px';
        triggersContainer.style.left = '0px';
        sceneOffset = 0;
    }
    
    const sceneWrapper = document.getElementById('sceneWrapper');
    
    if (!sceneWrapper || !sceneImage) return;
    
    // 计算触发点容器的宽度
    updateTriggersContainerWidth();
    
    // 设置触发点位置
    setTriggerPositions();
    
    // 添加拖拽事件监听
    sceneWrapper.addEventListener('mousedown', startDrag);
    sceneWrapper.addEventListener('touchstart', startDrag, { passive: false });
    
    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', drag, { passive: false });
    
    document.addEventListener('mouseup', endDrag);
    document.addEventListener('touchend', endDrag);
    
    // 添加对话触发点点击事件
    document.querySelectorAll('.dialogue-trigger').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const dialogueType = trigger.dataset.dialogue;
            showDialogue(dialogueType);
        });
    });
    
    // 添加还原案件按钮点击事件
    document.getElementById('reconstructBtn').addEventListener('click', showPlotSorting);
    
    // 添加嫌疑人档案按钮点击事件
    document.getElementById('suspectProfileBtn').addEventListener('click', showProfileModal);
    
    // 监听图片加载完成事件
    sceneImage.addEventListener('load', () => {
        updateTriggersContainerWidth();
        setTriggerPositions();
    });
    
    updateProgress();
}

// 设置触发点位置
function setTriggerPositions() {
    const sceneImage = document.getElementById('sceneImage');
    
    // 确保图片已加载
    if (!sceneImage.complete) {
        return;
    }
    
    // 获取图片的实际显示尺寸
    const imageWidth = sceneImage.offsetWidth;
    const imageHeight = sceneImage.offsetHeight;
    
    Object.keys(gameData.triggerPositions).forEach(triggerType => {
        const trigger = document.querySelector(`[data-dialogue="${triggerType}"]`);
        const position = gameData.triggerPositions[triggerType];
        
        if (trigger && position && imageWidth > 0 && imageHeight > 0) {
            // 根据百分比计算实际像素位置
            
            // 水平位置
            if (position.leftPercent !== undefined) {
                const leftPx = Math.round(imageWidth * position.leftPercent);
                trigger.style.left = leftPx + 'px';
                trigger.style.right = 'auto';
            } else if (position.rightPercent !== undefined) {
                const rightPx = Math.round(imageWidth * position.rightPercent);
                trigger.style.right = rightPx + 'px';
                trigger.style.left = 'auto';
            }
            
            // 垂直位置
            if (position.bottomPercent !== undefined) {
                const bottomPx = Math.round(imageHeight * position.bottomPercent);
                trigger.style.bottom = bottomPx + 'px';
                trigger.style.top = 'auto';
            } else if (position.topPercent !== undefined) {
                const topPx = Math.round(imageHeight * position.topPercent);
                trigger.style.top = topPx + 'px';
                trigger.style.bottom = 'auto';
            }
        }
    });
}

// 更新触发点容器宽度
function updateTriggersContainerWidth() {
    const sceneImage = document.getElementById('sceneImage');
    const triggersContainer = document.getElementById('triggersContainer');
    
    if (sceneImage && triggersContainer) {
        // 等待图片加载完成
        if (sceneImage.complete && sceneImage.offsetWidth > 0) {
            triggersContainer.style.width = sceneImage.offsetWidth + 'px';
            triggersContainer.style.height = sceneImage.offsetHeight + 'px';
        } else {
            sceneImage.onload = function() {
                triggersContainer.style.width = sceneImage.offsetWidth + 'px';
                triggersContainer.style.height = sceneImage.offsetHeight + 'px';
                setTriggerPositions();
            };
        }
    }
}

// 拖拽功能
function startDrag(e) {
    isDragging = true;
    startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    currentX = startX;
    document.body.style.cursor = 'grabbing';
}

function drag(e) {
    if (!isDragging) return;
    
    e.preventDefault();
    currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const deltaX = currentX - startX;
    
    const sceneImage = document.getElementById('sceneImage');
    const triggersContainer = document.getElementById('triggersContainer');
    const container = document.getElementById('sceneWrapper');
    
    const containerWidth = container.offsetWidth;
    const imageWidth = sceneImage.offsetWidth;
    
    let newOffset = sceneOffset + deltaX;
    
    // 限制拖拽范围
    const maxOffset = 0;
    const minOffset = containerWidth - imageWidth;
    
    if (newOffset > maxOffset) newOffset = maxOffset;
    if (newOffset < minOffset) newOffset = minOffset;
    
    // 同时移动图片和触发点容器
    sceneImage.style.left = newOffset + 'px';
    triggersContainer.style.left = newOffset + 'px';
}

function endDrag() {
    if (!isDragging) return;
    
    isDragging = false;
    document.body.style.cursor = 'default';
    
    const sceneImage = document.getElementById('sceneImage');
    sceneOffset = parseInt(sceneImage.style.left) || 0;
    startX = 0;
    currentX = 0;
}

// 显示对话并解锁情节片段
function showDialogue(dialogueType) {
    const dialogue = gameData.dialogues[dialogueType];
    if (!dialogue) return;
    
    // 使用新的气泡对话系统
    showBubbleDialogue(dialogueType, dialogue);
    
    // 标记为已触发
    gameState.triggeredDialogues.add(dialogueType);
    
    // 解锁对应的情节片段
    unlockPlotSegments(dialogueType);
    
    // 更新触发点样式
    const trigger = document.querySelector(`[data-dialogue="${dialogueType}"]`);
    if (trigger) {
        trigger.classList.add('triggered');
    }
    
    updateProgress();
}

// 新的气泡对话系统
function showBubbleDialogue(dialogueType, dialogue) {
    const overlay = document.getElementById('dialogueOverlay');
    const title = document.getElementById('bubbleTitle');
    const content = document.getElementById('bubbleContent');
    const closeBtn = document.getElementById('bubbleCloseBtn');
    
    // 设置标题
    title.textContent = dialogue.title;
    
    // 清空内容和重置按钮状态
    content.innerHTML = '';
    closeBtn.classList.remove('show');
    
    // 显示遮罩
    overlay.classList.add('show');
    
    // 依序显示每个对话气泡
    showDialogueSequence(dialogue.content, content, 0);
}

// 依序显示对话内容，每句话逐字打印
function showDialogueSequence(contents, container, index) {
    if (index >= contents.length) {
        // 所有对话显示完成，显示关闭按钮
        setTimeout(() => {
            document.getElementById('bubbleCloseBtn').classList.add('show');
        }, 300);
        return;
    }
    
    const textDiv = document.createElement('div');
    textDiv.className = 'bubble-text';
    container.appendChild(textDiv);
    
    // 先显示气泡容器
    setTimeout(() => {
        textDiv.classList.add('show');
        
        // 然后开始逐字打印
        setTimeout(() => {
            typewriterEffect(contents[index], textDiv, () => {
                // 当前句子完成后，等待一段时间显示下一句
                setTimeout(() => {
                    showDialogueSequence(contents, container, index + 1);
                }, 800);
            });
        }, 400);
    }, 200 * index); // 每个气泡延迟显示
}

// 逐字打印效果
function typewriterEffect(text, element, callback) {
    let charIndex = 0;
    element.innerHTML = '';
    
    function typeChar() {
        if (charIndex < text.length) {
            const char = text.charAt(charIndex);
            const span = document.createElement('span');
            span.className = 'typewriter-char';
            span.textContent = char;
            element.appendChild(span);
            
            charIndex++;
            setTimeout(typeChar, 50); // 控制打字速度
        } else {
            // 打字完成
            if (callback) callback();
        }
    }
    
    typeChar();
}

// 关闭气泡对话
function closeBubbleDialogue() {
    const overlay = document.getElementById('dialogueOverlay');
    
    overlay.classList.remove('show');
}

// 解锁情节片段
function unlockPlotSegments(dialogueType) {
    const segments = gameData.plotSegments[dialogueType];
    if (segments) {
        segments.forEach(segment => {
            if (!gameState.unlockedSegments.find(s => s.id === segment.id)) {
                gameState.unlockedSegments.push(segment);
            }
        });
    }
}

// 关闭对话
function closeDialogue() {
    document.getElementById('dialogueModal').style.display = 'none';
}

// 更新进度
function updateProgress() {
    // 检查游戏界面是否可见
    const gameContainer = document.getElementById('gameContainer');
    if (!gameContainer || gameContainer.style.display === 'none') {
        return; // 如果在首页状态，不更新进度
    }
    
    const progressFill = document.getElementById('progressFill');
    const reconstructBtn = document.getElementById('reconstructBtn');
    
    if (!progressFill || !reconstructBtn) {
        return; // 如果元素不存在，直接返回
    }
    
    const totalDialogues = Object.keys(gameData.dialogues).length;
    const triggeredCount = gameState.triggeredDialogues.size;
    
    const progress = (triggeredCount / totalDialogues) * 100;
    progressFill.style.width = progress + '%';
    
    reconstructBtn.textContent = `还原案件 (${triggeredCount}/${totalDialogues})`;
    
    if (triggeredCount === totalDialogues) {
        reconstructBtn.disabled = false;
        reconstructBtn.textContent = '还原案件';
    }
}

// 显示情节排序界面
function showPlotSorting() {
    if (gameState.unlockedSegments.length === 0) {
        alert('请先调查所有线索！');
        return;
    }
    
    const modal = document.getElementById('plotModal');
    const body = document.getElementById('plotBody');
    
    let orderedSegments;
    
    // 如果有保存的顺序，恢复保存的顺序
    if (gameState.savedSortOrder.length > 0) {
        // 根据保存的顺序重新排列情节
        orderedSegments = gameState.savedSortOrder.map(id => 
            gameState.unlockedSegments.find(segment => segment.id === id)
        ).filter(segment => segment !== undefined);
        
        // 添加新解锁的情节（如果有的话）
        const newSegments = gameState.unlockedSegments.filter(segment => 
            !gameState.savedSortOrder.includes(segment.id)
        );
        orderedSegments = [...orderedSegments, ...newSegments];
        
        gameState.currentSortOrder = orderedSegments.map(s => s.id);
    } else {
        // 第一次打开时，打乱情节顺序
        orderedSegments = [...gameState.unlockedSegments].sort(() => Math.random() - 0.5);
        gameState.currentSortOrder = orderedSegments.map(s => s.id);
    }
    
    body.innerHTML = `
        <div class="plot-instruction">
            <p>根据物品的证词，将下列情节按时间顺序排列：</p>
            <p class="drag-hint">💡 拖拽情节项到合适的位置进行排序</p>
            <p class="save-hint">💾 可随时关闭窗口，排序进度会自动保存</p>
        </div>
        <div class="plot-list" id="plotList">
            ${orderedSegments.map((segment, index) => `
                <div class="plot-item" 
                     data-id="${segment.id}" 
                     data-index="${index}"
                     draggable="true"
                     ondragstart="handleDragStart(event)"
                     ondragover="handleDragOver(event)"
                     ondragenter="handleDragEnter(event)"
                     ondragleave="handleDragLeave(event)"
                     ondrop="handleDrop(event)"
                     ondragend="handleDragEnd(event)">
                    <span class="plot-number">${index + 1}</span>
                    <span class="plot-text">${segment.text}</span>
                    <span class="drag-handle">⋮⋮</span>
                </div>
            `).join('')}
        </div>
    `;
    
    modal.style.display = 'flex';
}

// 关闭情节排序界面并保存当前状态
function closePlotSorting() {
    // 保存当前的排序状态
    gameState.savedSortOrder = [...gameState.currentSortOrder];
    
    // 关闭模态框
    const modal = document.getElementById('plotModal');
    modal.style.display = 'none';
    
    console.log('已保存排序进度:', gameState.savedSortOrder);
}

// 拖拽开始
function handleDragStart(e) {
    draggedElement = e.target.closest('.plot-item');
    draggedIndex = parseInt(draggedElement.dataset.index);
    
    draggedElement.style.opacity = '0.5';
    draggedElement.classList.add('dragging');
    
    // 设置拖拽数据
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', draggedElement.outerHTML);
}

// 拖拽经过
function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    
    const currentItem = e.target.closest('.plot-item');
    if (!currentItem || currentItem === draggedElement) return;
    
    const rect = currentItem.getBoundingClientRect();
    const midY = rect.top + rect.height / 2;
    const mouseY = e.clientY;
    
    // 移除所有现有的插入指示器
    document.querySelectorAll('.insert-indicator').forEach(indicator => {
        indicator.remove();
    });
    
    // 创建插入指示器
    const indicator = document.createElement('div');
    indicator.className = 'insert-indicator';
    
    if (mouseY < midY) {
        // 插入到当前项之前
        currentItem.parentNode.insertBefore(indicator, currentItem);
        currentItem.classList.remove('drag-over-bottom');
        currentItem.classList.add('drag-over-top');
    } else {
        // 插入到当前项之后
        currentItem.parentNode.insertBefore(indicator, currentItem.nextSibling);
        currentItem.classList.remove('drag-over-top');
        currentItem.classList.add('drag-over-bottom');
    }
    
    dropTarget = currentItem;
}

// 拖拽进入
function handleDragEnter(e) {
    e.preventDefault();
    const currentItem = e.target.closest('.plot-item');
    if (currentItem && currentItem !== draggedElement) {
        currentItem.classList.add('drag-over');
    }
}

// 拖拽离开
function handleDragLeave(e) {
    const currentItem = e.target.closest('.plot-item');
    if (currentItem) {
        currentItem.classList.remove('drag-over', 'drag-over-top', 'drag-over-bottom');
    }
}

// 拖拽放下
function handleDrop(e) {
    e.preventDefault();
    
    if (!dropTarget || dropTarget === draggedElement) return;
    
    const rect = dropTarget.getBoundingClientRect();
    const midY = rect.top + rect.height / 2;
    const mouseY = e.clientY;
    
    const targetIndex = parseInt(dropTarget.dataset.index);
    let newIndex;
    
    if (mouseY < midY) {
        // 插入到目标项之前
        newIndex = targetIndex;
    } else {
        // 插入到目标项之后
        newIndex = targetIndex + 1;
    }
    
    // 如果拖拽项在目标项之前，需要调整新索引
    if (draggedIndex < newIndex) {
        newIndex--;
    }
    
    // 更新排序数组
    const movedId = gameState.currentSortOrder.splice(draggedIndex, 1)[0];
    gameState.currentSortOrder.splice(newIndex, 0, movedId);
    
    // 直接操作DOM显示插入动画
    animateItemInsertion(draggedElement, dropTarget, mouseY < midY);
}

// 动画插入项目到新位置
function animateItemInsertion(draggedItem, targetItem, insertBefore) {
    const plotList = document.getElementById('plotList');
    const allItems = Array.from(plotList.querySelectorAll('.plot-item'));
    
    // 移除插入指示器
    document.querySelectorAll('.insert-indicator').forEach(indicator => {
        indicator.remove();
    });
    
    // 确定插入位置
    const insertPosition = insertBefore ? targetItem : targetItem.nextSibling;
    const targetIndex = parseInt(targetItem.dataset.index);
    const insertIndex = insertBefore ? targetIndex : targetIndex + 1;
    
    // 为所有需要移动的项目添加让位动画
    allItems.forEach((item, index) => {
        if (item === draggedItem) return;
        
        const itemIndex = parseInt(item.dataset.index);
        let shouldMove = false;
        let moveDirection = 0;
        
        // 如果拖拽项目从前面移动到后面
        if (draggedIndex < insertIndex) {
            if (itemIndex > draggedIndex && itemIndex < insertIndex) {
                shouldMove = true;
                moveDirection = -1; // 向上移动
            }
        } 
        // 如果拖拽项目从后面移动到前面
        else if (draggedIndex > insertIndex) {
            if (itemIndex >= insertIndex && itemIndex < draggedIndex) {
                shouldMove = true;
                moveDirection = 1; // 向下移动
            }
        }
        
        if (shouldMove) {
            item.style.transition = 'transform 0.3s ease';
            item.style.transform = `translateY(${moveDirection * (draggedItem.offsetHeight + 12)}px)`;
        }
    });
    
    // 创建临时占位符
    const placeholder = document.createElement('div');
    placeholder.className = 'plot-item-placeholder';
    placeholder.style.height = draggedItem.offsetHeight + 'px';
    placeholder.style.opacity = '0';
    placeholder.style.transform = 'scaleY(0)';
    placeholder.style.transition = 'all 0.3s ease';
    
    // 插入占位符
    plotList.insertBefore(placeholder, insertPosition);
    
    // 为拖拽项添加移动动画
    const draggedRect = draggedItem.getBoundingClientRect();
    const placeholderRect = placeholder.getBoundingClientRect();
    
    // 计算移动距离
    const deltaY = placeholderRect.top - draggedRect.top;
    
    // 开始动画
    requestAnimationFrame(() => {
        // 占位符展开动画
        placeholder.style.opacity = '1';
        placeholder.style.transform = 'scaleY(1)';
        
        // 拖拽项移动动画
        draggedItem.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
        draggedItem.style.transform = `translateY(${deltaY}px)`;
        draggedItem.style.zIndex = '1001';
        draggedItem.style.opacity = '0.8';
        
        // 动画完成后的处理
        setTimeout(() => {
            // 将拖拽项插入到正确位置
            plotList.insertBefore(draggedItem, placeholder);
            plotList.removeChild(placeholder);
            
            // 重置所有项目的样式
            allItems.forEach(item => {
                item.style.transition = '';
                item.style.transform = '';
            });
            
            // 重置拖拽项样式
            draggedItem.style.transition = '';
            draggedItem.style.transform = '';
            draggedItem.style.zIndex = '';
            draggedItem.style.opacity = '';
            
            // 更新所有项目的索引和序号
            updateItemIndicesAndNumbers();
            
            // 添加完成动画效果
            draggedItem.style.transition = 'background-color 0.5s ease, transform 0.3s ease';
            draggedItem.style.backgroundColor = '#4CAF50';
            draggedItem.style.transform = 'scale(1.02)';
            
            setTimeout(() => {
                draggedItem.style.backgroundColor = '';
                draggedItem.style.transform = '';
                setTimeout(() => {
                    draggedItem.style.transition = '';
                }, 300);
            }, 500);
            
        }, 300);
    });
}

// 更新项目索引和序号
function updateItemIndicesAndNumbers() {
    const plotList = document.getElementById('plotList');
    const items = plotList.querySelectorAll('.plot-item');
    
    items.forEach((item, index) => {
        // 更新data-index
        item.dataset.index = index;
        
        // 更新显示的序号
        const numberSpan = item.querySelector('.plot-number');
        if (numberSpan) {
            numberSpan.textContent = index + 1;
        }
        
        // 添加轻微的更新动画
        item.style.transition = 'background-color 0.2s ease';
        item.style.backgroundColor = '#4c4c4c';
        
        setTimeout(() => {
            item.style.backgroundColor = '';
        }, 200);
    });
}

// 拖拽结束
function handleDragEnd(e) {
    // 清理样式
    if (draggedElement) {
        draggedElement.style.opacity = '';
        draggedElement.classList.remove('dragging');
    }
    
    // 清理所有拖拽相关的样式
    document.querySelectorAll('.plot-item').forEach(item => {
        item.classList.remove('drag-over', 'drag-over-top', 'drag-over-bottom');
    });
    
    // 移除插入指示器
    document.querySelectorAll('.insert-indicator').forEach(indicator => {
        indicator.remove();
    });
    
    // 自动保存当前排序状态
    if (gameState.currentSortOrder.length > 0) {
        gameState.savedSortOrder = [...gameState.currentSortOrder];
        console.log('自动保存排序进度:', gameState.savedSortOrder);
    }
    
    // 重置变量
    draggedElement = null;
    draggedIndex = null;
    dropTarget = null;
}

// 检查情节排序
function checkPlotOrder() {
    // 获取正确的排序
    const correctOrder = gameState.unlockedSegments
        .sort((a, b) => a.order - b.order)
        .map(s => s.id);
    
    // 检查当前排序是否正确
    const isCorrect = gameState.currentSortOrder.every((id, index) => id === correctOrder[index]);
    
    if (isCorrect) {
        // 清除保存的排序状态（因为已经完成了）
        gameState.savedSortOrder = [];
        // 关闭情节排序窗口
        document.getElementById('plotModal').style.display = 'none';
        // 显示真凶选择窗口
        showSuspectSelection();
    } else {
        alert('推理不正确，再想想吧！注意时间线的逻辑关系。');
    }
}

// 显示真凶选择界面
function showSuspectSelection() {
    const modal = document.getElementById('suspectModal');
    const body = document.getElementById('suspectBody');
    
    body.innerHTML = `
        <div class="final-judgment-container">
            <div class="judgment-title">「最终审判」</div>
            <div class="suspects-grid">
                ${Object.values(gameData.suspectProfiles).map((profile, index) => `
                    <div class="suspect-card" data-suspect-id="${index + 1}" onclick="selectSuspectCard(${index + 1})">
                        <img src="${profile.photo}" alt="${profile.name}" class="suspect-avatar">
                        <div class="suspect-name">${profile.name}</div>
                    </div>
                `).join('')}
            </div>
            <button class="accuse-btn" id="accuseBtn" disabled onclick="makeAccusation()">
                凶手就是你！
            </button>
        </div>
    `;
    
    modal.style.display = 'flex';
}

// 选择嫌疑人卡片
let selectedSuspectId = null;
function selectSuspectCard(suspectId) {
    // 移除之前的选中状态
    document.querySelectorAll('.suspect-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // 添加选中状态
    const selectedCard = document.querySelector(`[data-suspect-id="${suspectId}"]`);
    selectedCard.classList.add('selected');
    
    // 记录选中的嫌疑人
    selectedSuspectId = suspectId;
    
    // 启用按钮
    document.getElementById('accuseBtn').disabled = false;
}

// 做出指控
function makeAccusation() {
    if (!selectedSuspectId) return;
    
    // 关闭嫌疑人选择窗口
    document.getElementById('suspectModal').style.display = 'none';
    
    // 检查是否选择正确（刘志强是真凶，对应suspectId=1）
    const isCorrect = selectedSuspectId === 1;
    
    if (isCorrect) {
        showVictoryEnding();
    } else {
        showFailureEnding();
    }
}



// 显示胜利结局
function showVictoryEnding() {
    const modal = document.getElementById('resultModal');
    const title = document.getElementById('resultTitle');
    const text = document.getElementById('resultText');
    
    title.textContent = '🎉 真相大白！';
    text.innerHTML = `
        <p style="margin-bottom: 15px;">恭喜你！成功破解了这起复杂的案件。</p>
        <p style="margin-bottom: 15px;">真凶正是商业仇敌刘志强，他因为生意纠纷愤而投毒，这是真正的致命一击。</p>
        <p style="margin-bottom: 15px;">而快递员张伟虽然蓄谋已久，精心策划了安眠药计划，但当他用枕头想要"杀死"富商时，富商早已因中毒而死亡。</p>
        <p>物品们的证词帮助你还原了完整的时间线，正义终将得到伸张！</p>
    `;
    
    modal.style.display = 'flex';
}

// 显示失败结局
function showFailureEnding() {
    const modal = document.getElementById('resultModal');
    const title = document.getElementById('resultTitle');
    const text = document.getElementById('resultText');
    
    title.textContent = '🤔 推理有误';
    text.innerHTML = `
        <p style="margin-bottom: 15px;">很遗憾，你的推理有误。</p>
        <p style="margin-bottom: 15px;">真正的凶手是商业仇敌刘志强，他在红酒中投毒才是致命的一击。</p>
        <p style="margin-bottom: 15px;">建议重新仔细分析物品们的证词，注意时间线和因果关系。</p>
        <p>每个细节都很重要，真相往往隐藏在看似平常的对话中。</p>
    `;
    
    modal.style.display = 'flex';
}

// 重新开始游戏
function restartGame() {
    // 关闭所有模态框
    document.getElementById('resultModal').style.display = 'none';
    document.getElementById('plotModal').style.display = 'none';
    document.getElementById('suspectModal').style.display = 'none';
    document.getElementById('dialogueModal').style.display = 'none';
    document.getElementById('profileModal').style.display = 'none';
    
    // 隐藏游戏界面，显示首页
    document.getElementById('gameContainer').style.display = 'none';
    document.getElementById('homepage').style.display = 'flex';
}

// 嫌疑人档案相关函数
function showProfileModal() {
    const modal = document.getElementById('profileModal');
    modal.style.display = 'flex';
    
    // 添加导航按钮事件监听器
    document.querySelectorAll('.profile-nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // 移除所有active类
            document.querySelectorAll('.profile-nav-btn').forEach(b => b.classList.remove('active'));
            // 给当前按钮添加active类
            e.target.classList.add('active');
            // 显示对应嫌疑人信息
            const suspectId = e.target.dataset.suspect;
            showSuspectProfile(suspectId);
        });
    });
    
    // 默认显示第一个嫌疑人
    showSuspectProfile('1');
}

function showSuspectProfile(suspectId) {
    const profile = gameData.suspectProfiles[suspectId];
    const profileCard = document.getElementById('profileCard');
    
    profileCard.innerHTML = `
        <div class="suspect-number">嫌疑人编号：${profile.id}</div>
        <img src="${profile.photo}" alt="${profile.name}" class="suspect-photo">
        <div class="suspect-info">
            <div class="info-item">
                <div class="info-label">姓名：</div>
                <div class="info-value">${profile.name}</div>
            </div>
            <div class="info-item">
                <div class="info-label">性别：</div>
                <div class="info-value">${profile.gender}</div>
            </div>
        </div>
        <div class="suspect-relation">
            <div class="relation-label">职业：</div>
            <div class="relation-value">${profile.occupation}</div>
        </div>
        <div class="suspect-relation">
            <div class="relation-label">与被害人关系：</div>
            <div class="relation-value">${profile.relationship}</div>
        </div>
        <div class="suspect-statement">
            <div class="statement-label">口供：</div>
            <div class="statement-text">"${profile.statement}"</div>
        </div>
    `;
}

function closeProfileModal() {
    document.getElementById('profileModal').style.display = 'none';
}

// 页面加载完成后不需要初始化游戏，等待用户点击开始游戏
document.addEventListener('DOMContentLoaded', () => {
    // 确保首页显示，游戏界面隐藏
    document.getElementById('homepage').style.display = 'flex';
    document.getElementById('gameContainer').style.display = 'none';
});

// 窗口大小改变时重新计算触发点容器宽度和位置
window.addEventListener('resize', () => {
    updateTriggersContainerWidth();
    setTriggerPositions();
}); 