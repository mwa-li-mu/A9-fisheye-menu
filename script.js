const items = document.querySelectorAll(".menu-item");
        let activeItem = null;
        let hoverState = {
            currentItem: null,
            timeoutId: null,
            isTransitioning: false
        };

        items.forEach(item => {
            const hoverZone = document.createElement('div');
            hoverZone.className = 'hover-zone';
            hoverZone.style.cssText = `
      position: absolute;
      top: -30px;
      left: -30px;
      right: -30px;
      bottom: -30px;
      z-index: 1;
      cursor: pointer;
      display: none;
    `;
            item.appendChild(hoverZone);

            let mouseX = 0;
            let mouseY = 0;
            let isInside = false;

            const updateHoverState = () => {
                const rect = item.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const distanceX = Math.abs(mouseX - centerX);
                const distanceY = Math.abs(mouseY - centerY);
                const maxDistance = item.classList.contains('hovering') || item.classList.contains('active')
                    ? 100
                    : 50;

                const shouldBeHovering = distanceX < maxDistance && distanceY < maxDistance;

                if (shouldBeHovering && !isInside && activeItem !== item) {
                    isInside = true;
                    items.forEach(i => {
                        if (i !== activeItem) {
                            i.classList.remove('hovering');
                        }
                    });
                    item.classList.add('hovering');
                    hoverState.currentItem = item;
                } else if (!shouldBeHovering && isInside && activeItem !== item) {
                    isInside = false;
                    item.classList.remove('hovering');
                    if (hoverState.currentItem === item) {
                        hoverState.currentItem = null;
                    }
                }
            };

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;

                if (!item.classList.contains('active')) {
                    updateHoverState();
                }
            });

            item.addEventListener('click', (e) => {
                e.stopPropagation();

                if (activeItem === item) {
                    item.classList.remove('active');
                    activeItem = null;
                    isInside = false;
                } else {
                    items.forEach(i => {
                        i.classList.remove('active');
                        i.classList.remove('hovering');
                    });
                    item.classList.add('active');
                    activeItem = item;
                    isInside = true;
                }
            });

            item.addEventListener('mouseenter', () => {
                if (activeItem !== item) {
                    isInside = true;
                    item.classList.add('hovering');
                }
            });

            item.addEventListener('mouseleave', (e) => {
                const related = e.relatedTarget;
                if (activeItem !== item && (!related || !related.closest('.menu-item'))) {
                    setTimeout(() => {
                        const rect = item.getBoundingClientRect();
                        const expandedRect = {
                            left: rect.left - 30,
                            top: rect.top - 30,
                            right: rect.right + 30,
                            bottom: rect.bottom + 30
                        };

                        if (mouseX < expandedRect.left || mouseX > expandedRect.right ||
                            mouseY < expandedRect.top || mouseY > expandedRect.bottom) {
                            item.classList.remove('hovering');
                            isInside = false;
                        }
                    }, 50);
                }
            });
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.menu-item')) {
                items.forEach(item => {
                    item.classList.remove('active');
                    item.classList.remove('hovering');
                });
                activeItem = null;
            }
        });

        document.querySelector('.menu-container').addEventListener('mouseleave', (e) => {
            const related = e.relatedTarget;
            if (!related || !related.closest('.menu-container')) {
                items.forEach(item => {
                    if (!item.classList.contains('active')) {
                        item.classList.remove('hovering');
                    }
                });
            }
        });