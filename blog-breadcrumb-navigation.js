<!--- Blog breadcrumbs Squarespace 7.1 ---------------------------------->
<!--- Copyright Primitus Consultancy [https://primitusconsultancy.com] -->
<script>
window.addEventListener('DOMContentLoaded', (event) => {

// Variables
let pcHome, pcBlogHome, pcBlogHomeLink, pcBlogTitle, pcBlogLink
let pcBlogItemTitle = document.querySelector(".blog-item-title"); // Blog Title
let link = window.location.href + '?format=json-pretty';
let pcStringText = "";


fetch(link)
.then(response => {
    // console.log('success', response);
    return response.json();
})
.then(data => {
    // console.log(data.website);
    pcHome = data.website.authenticUrl;
    pcBlogHome = data.collection.title;
    pcBlogHomeLink = data.collection.fullUrl;
    pcBlogTitle = data.item.title;
    pcBlogLink = data.item.fullUrl;


// Link construct
  pcStringText = "<div class='blog-nav-display'><div class='blogcrumb'> <a  href='" + pcHome + "' >Home</a><a  href='" + pcBlogHomeLink + "' > " + pcBlogHome + "</a><a  href='#' > " + pcBlogTitle + "</a></div></div>";

// Render to browser
pcBlogItemTitle.insertAdjacentHTML("afterend", pcStringText);

});
  
});
</script>
