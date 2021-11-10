// kakao map    
var mapContainer = document.getElementById('map'), 
  mapOption = {
    center: new kakao.maps.LatLng(33.450701, 126.570667), 
    level: 3 
  };  
  
var map = new kakao.maps.Map(mapContainer, mapOption); 
var mapTypeControl = new kakao.maps.MapTypeControl();
var geocoder = new kakao.maps.services.Geocoder();

map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

geocoder.addressSearch('인천광역시 연수구 송도동 10-7', function(result, status) {
  if (status === kakao.maps.services.Status.OK) {

    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
    var marker = new kakao.maps.Marker({
      map: map,
      position: coords
    });

    map.setCenter(coords);
  } 
}); 