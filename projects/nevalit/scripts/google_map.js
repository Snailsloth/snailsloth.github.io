function initMap() {
    var nevaLit = {lat: 59.986548, lng: 30.250299};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: nevaLit,
      disableDefaultUI: true,
      gestureHandling: 'cooperative',
      fullscreenControl: true,
      zoomControl: true,
      disableDoubleClickZoom: true,
      mapTypeControl: false,
      scaleControl: true,
      scrollwheel: false,
      streetViewControl: false,
      draggable : true,
      clickableIcons: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });


    var gwlogo = '../img/mm.png';
    var gwMarker = new google.maps.Marker({
      icon: gwlogo,
      title: 'Нева Лит',
      map: map,
      position: nevaLit,
      map: map,
      draggable: false
      });

    function toggleBounce() {
      if (gwMarker.getAnimation() !== null) {
        gwMarker.setAnimation(null);
      } else {
        gwMarker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }




}


