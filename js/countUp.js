$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 3000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
  });  
  
});




        <div class="row countup-section">
          <div class="col-3">
            <div class="counter" data-count="150">0</div>
          </div>
          <div class="col-3">
            <div class="counter" data-count="150">0</div>
          </div>
          <div class="col-3">
            <div class="counter" data-count="150">0</div>
          </div>
          <div class="col-3">
            <div class="counter" data-count="150">0</div>
          </div>
        </div>