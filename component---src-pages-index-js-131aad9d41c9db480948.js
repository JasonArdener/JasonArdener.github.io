(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{140:function(t,e,n){"use strict";n.r(e),n.d(e,"query",function(){return u});var a=n(8),r=(n(0),n(146)),i=n(147),o={name:"9w33so",styles:"display:inline-block;border-bottom:1px solid;"},c={name:"qp4dny",styles:"color:#bbb;"};e.default=function(t){var e=t.data;return console.log(e),Object(a.b)(i.a,null,Object(a.b)("div",null,Object(a.b)("h1",{css:o},"Website blog thing header"),Object(a.b)("h4",null,e.allMarkdownRemark.totalCount," Posts"),e.allMarkdownRemark.edges.map(function(t){var e=t.node;return Object(a.b)("div",{key:e.id},Object(a.b)("h3",{css:Object(a.a)("margin-bottom:",Object(r.a)(.25),";")},e.frontmatter.title," ",Object(a.b)("span",{css:c},"— ",e.frontmatter.date)),Object(a.b)("p",null,e.excerpt))})))};var u="1054267027"},144:function(t,e,n){var a;t.exports=(a=n(149))&&a.default||a},145:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return h}),n.d(e,"StaticQueryContext",function(){return f}),n.d(e,"StaticQuery",function(){return p});var a=n(8),r=n(0),i=n.n(r),o=n(4),c=n.n(o),u=n(143),s=n.n(u);n.d(e,"Link",function(){return s.a}),n.d(e,"withPrefix",function(){return u.withPrefix}),n.d(e,"navigate",function(){return u.navigate}),n.d(e,"push",function(){return u.push}),n.d(e,"replace",function(){return u.replace}),n.d(e,"navigateTo",function(){return u.navigateTo});var d=n(144),l=n.n(d);n.d(e,"PageRenderer",function(){return l.a});var b=n(33);n.d(e,"parsePath",function(){return b.a});var f=i.a.createContext({}),p=function(t){return Object(a.b)(f.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(a.b)("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},146:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var a=n(150),r=n.n(a),i=n(151),o=n.n(i),c=new r.a(o.a),u=c.rhythm},147:function(t,e,n){"use strict";var a=n(8),r=n(148),i=(n(0),n(145)),o=n(146),c={name:"146q31f",styles:"float:right;"};e.a=function(t){var e=t.children;return Object(a.b)(i.StaticQuery,{query:"3892401927",render:function(t){return Object(a.b)("div",{css:Object(a.a)("margin:0 auto;max-width:700px;padding:",Object(o.a)(2),";padding-top:",Object(o.a)(1.5),";")},Object(a.b)(i.Link,{to:"/"},Object(a.b)("h3",{css:Object(a.a)("margin-bottom:",Object(o.a)(2),";display:inline-block;font-style:normal;")},t.site.siteMetadata.title)),Object(a.b)(i.Link,{to:"/about/",css:c},"About"),e)},data:r})}},148:function(t){t.exports={data:{site:{siteMetadata:{title:"Title using GraphQL"}}}}},149:function(t,e,n){"use strict";n.r(e);n(51);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(52),u=n(2),s=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s}}]);
//# sourceMappingURL=component---src-pages-index-js-131aad9d41c9db480948.js.map