$( document ).ready(function(){
	
    hljs.initHighlightingOnLoad();

	
    var ref = $('.styleguide-menu').find('.styleguide-menu-list').data('kss-ref');
	
    var $window = $(window),
        $document = $(document),
        $content = $('.styleguide-content'),
        $sidebar = $('.styleguide-menu'),
        $sidebarInner = $('.styleguide-menu-list'),
        $menu = $('.styleguide-menu-list'),
        $childMenu = $('.kss-menu-child'),
        $menuItem = $menu.find('.kss-menu-item'),
        $childMenuItem = $childMenu.find('.kss-menu-item'),
        sRef = $menu.data('kss-ref');

    // Dynamic menu activation
    function scrollSpy() {
        var scrollTop = $window.scrollTop(),
            $anchors = $childMenu.find('a'),
            activeIndex;
        $anchors.each(function (index) {
            var $target = $($(this).attr('href').replace(/\./g, '\\.')),
                offsetTop = $target.offset().top,
                offsetBottom = offsetTop + $target.outerHeight(true);
            if (offsetTop <= scrollTop && scrollTop < offsetBottom) {
                activeIndex = index;
                return false;
            }
        });
        $childMenuItem.removeClass('selected');
        if (typeof activeIndex !== 'undefined') {
            $childMenuItem.eq(activeIndex).addClass('selected');
        }
    }

    // Fix sidebar position
    function fixSidebar() {
        console.log('function fixSidebar()');
        if ($sidebarInner.outerHeight() < $content.outerHeight()) {
            console.log('if ($sidebarInner.outerHeight() < $content.outerHeight()) {');
            $sidebar.addClass('kss-fixed');
            if ($sidebarInner.outerHeight() > $window.height()) {
                $sidebar.height($window.height());
                $window.on('scroll', scrollSidebar).trigger('scroll');
            }
            else {
                $sidebar.height('auto');
                $window.off('scroll', scrollSidebar);
            }
        }
        else {
            console.log('else...');
            $sidebar.removeClass('kss-fixed');
            $sidebar.height('auto');
            $window.off('scroll', scrollSidebar);
        }
    }

    // Synchronize sidebar scroll
    function scrollSidebar(event) {
        if (event.handled !== true) {
            var scrollTop = $window.scrollTop(),
                maxScrollTop = $document.height() - $window.height();
            if (scrollTop >= 0 && prevScrollTop >= 0 && scrollTop <= maxScrollTop && prevScrollTop <= maxScrollTop) {  // for Mac scrolling
                $sidebar.scrollTop($sidebar.scrollTop() + (scrollTop - prevScrollTop));
            }
            prevScrollTop = scrollTop;
            event.handled = true;
        }
        else {
            return false;
        }
    }

    // Fixed sidebar
    // if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    //     $window.on('resize', fixSidebar).trigger('resize');
    // }

    $('.styleguide-menu').find('a').eq(ref).addClass('selected');

    if ($childMenu.length) {
        $childMenu.show().appendTo($menuItem.eq(sRef));
        //$window.on('scroll', scrollSpy).trigger('scroll');
    }
});

