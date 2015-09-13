@extends('master')

@section('head')
<script type="text/javascript">
window.onload=function(){
var url = document.URL;
url1 = url.split("=");
url2 = url1[1].split("%20").join(" ");
url2 = url2.split("+").join(" ");
document.getElementById("queryStringVal").value=url2;
}
</script>

<script>
function gcseCallback() {
if (document.readyState != 'complete')
return google.setOnLoadCallback(gcseCallback, true);
google.search.cse.element.render({gname:'gsearch', div:'results', tag:'searchresults-only', attributes:{linkTarget:'', webSearchResultSetSize: "3"}});
var element = google.search.cse.element.getElement('gsearch');
element.execute(queryStringVal.value);
};
window.__gcse = {
parsetags: 'explicit',
callback: gcseCallback
};
(function() {
var cx = '008818185974073145685:ga_fmgk9gf0';
var gcse = document.createElement('script');
gcse.type = 'text/javascript';
gcse.async = true;
gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
'//www.google.com/cse/cse.js?cx=' + cx;
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(gcse, s);
})();
</script>
@stop

@section('content')
<div class = "container text-center ">
<div class = "row">
<div class = "col-md-12 text-center text-uppercase">
<h1 class = "title-super text-uppercase text-thin">Jellibeans</h1>
<h4>Search</h4>
</div>

<hr>

 <div class = "img-responsive smallText col-md-12">
    <sp>Your Jellibean Query was:</sp>
 </div>
 
 <div class = "col-md-12">
    <input type="text" name="result" class ="title-logo" id ="queryStringVal" value = "" style = "height: 30px; width: 60%;" >
 </div>
 <div class = "img-responsive smallText col-md-12">
 <input type="button" value="Show Results" onClick="window.location.reload()" style="margin-top: 20px;">
 </div>
 
<div id="results"></div>

</div>
</div>
@stop