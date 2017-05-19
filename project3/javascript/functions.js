function fillMap(selection, color, data) {

  // TODO: minor fix, sometimes d gets a -99, why?
  selection
  .attr("fill", function(d) {
    if (data[d.id] == "2") {return "#DB2C1F";}
    return data[d.id] == "1"  ? color : color_na; });
}

function updateMap(color, data) {

  // fill paths
  map.selectAll("path")

    .call(fillMap, color, data);

}

function updateIcon(opacity, data) {
  var key = Object.keys(data);
  for (var i = 0; i<key.length; i++){
    var key2 = key[i];
    if(data[key2] == "1") {
      countryNav.select("#" + key2).attr("opacity",opacity);
  }
  else {
    countryNav.select("#" + key2).attr("opacity",0.1);
  }
}}

function updatepanda(data,year){
  var key = Object.keys(data);
  for (var i = 0; i<key.length; i++){
    var key2 = key[i];
    if(data[key2] == "1") {
      map.select("#panda"+key2)
      .transition().duration(1000)
      .attr("opacity", 1);
  }
  else {
    map.select("#panda"+ key2)
    .attr("opacity", 0);
  }

}}
