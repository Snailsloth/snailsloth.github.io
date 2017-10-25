function initMap() {
    var globalWeb = {lat: 59.980852, lng: 30.379176};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: globalWeb,
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


    var gwlogo = '../img/gwpointer.png';
    var gwMarker = new google.maps.Marker({
      icon: gwlogo,
      title: 'Global Web Group',
      map: map,
      position: globalWeb,
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


