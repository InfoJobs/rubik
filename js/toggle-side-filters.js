(function(){
  var openFilters;
  var closeFilters;
  var filtersLayer;

	function toggleFilterLayer() {
    openFilters = document.querySelector('.js-show-filters');
    closeFilters = document.querySelector('.js-close-filters');
    filtersLayer = document.querySelector('.js-filters-layer');

    if(openFilters) {
      openFilters.addEventListener('click', function() {
        filtersLayer.classList.add('move-up-layer');
        filtersLayer.classList.remove('move-down-layer');
        filtersLayer.classList.remove('layer-hidden');
      });
    }

    if(closeFilters) {
      closeFilters.addEventListener('click', function() {
        filtersLayer.classList.remove('move-up-layer');
        filtersLayer.classList.add('move-down-layer');
      });
    }

	}

  window.addEventListener('load', toggleFilterLayer);

})();
