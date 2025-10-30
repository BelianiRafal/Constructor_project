export function YouTube({
    type,
    queries,
    src,
    getField
}) {
    const path = new URL(getField(queries.youtubeHref, "Href")).pathname.replace(
        "/",
        ""
      );


    return `
    ${type === "newsletter" 
                ?
                `
                <tr>
                <td align="center">
                  <a href="${getField(queries.youtubeHref, "Href")}">
                    <img alt="" src="${src}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                  </a>
                </td>
              </tr>

              <tr>
                <td class="newsletterBottom35px" >
                </td>
              </tr>
              <tr>
                <td align="center">
                  <a href="${getField(
                    queries.youtubeHref,
                    "Href"
                  )}" style="color:#ffffff; text-decoration: underline;">
                    <span class="newsletterCta">${queries.watchNow}</span>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="newsletterBottom80px" >
                </td>
              </tr>
                `
                :
                `
                <tr>
              <td align="center" style="background-color: #ff2f00;" class="newsletterContainer">
                  <iframe id="newsletterIFrame" style="display: block;" src="https://www.youtube.com/embed/${path}?enablejsapi=1&amp;mute=1&amp;playlist=${path}&amp;loop=1" width="610" height="400" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>
              </td>
            </tr>

            <tr>
              <td class="newsletterBottom35px" >
              </td>
            </tr>

            <tr>
              <td align="center">
                <a href="${getField(
                  queries.youtubeHref,
                  "Href"
                )}" style="color:#ffffff; text-decoration: underline;">
                  <span class="newsletterCta">${queries.watchNow}</span>
                </a>
              </td>
            </tr>
            <tr>
              <td class="newsletterBottom80px" >
              </td>
            </tr>

            <script>

            const selectorss = ["newsletterIFrame"];

            function onYouTubeIframeAPIReady() {
              selectorss.forEach((selector) => {
                new YT.Player(selector, {
                  events: {
                    onReady: saveEvent,
                  },
                });
              });
            }
            
            let eventOnReady = {};
            function saveEvent(event) {
              console.log(event);
              eventOnReady[event.target.g.id] = event.target;
            }
            
            function mountIntersectionMobile() {
              var tag = document.createElement("script");
              tag.src = "https://www.youtube.com/iframe_api";
              var firstScriptTag = document.getElementsByTagName("script")[0];
              firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            }
            
            function play(id) {
              eventOnReady[id].playVideo();
            }
            
            function handleIntersectingMobile(elements, observer) {
              elements.forEach((item) => {
                if (item.isIntersecting) {
                  play(item.target.id);
                }
              });
            }
            
            const observerMobile = new IntersectionObserver(handleIntersectingMobile);
            window.onload = () => {
              mountIntersectionMobile();
              selectorss.forEach((frame) =>
                observerMobile.observe(document.querySelector("#" + frame))
              );
            };

            </script>
                `
              }
    `
}