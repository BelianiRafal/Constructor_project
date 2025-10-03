{
  /* <tr>
    <td align="center" style="background-color: #e6eaed; padding-top: 20px; padding-bottom: 20px;" class="newsletterContainer">
        <iframe id="newsletterIFrame" class="newsletterIFrame" src="https://www.youtube.com/embed/fgMCRXieDfw?enablejsapi=1&amp;mute=1&amp;playlist=fgMCRXieDfw&amp;loop=1" width="650" height="400" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>
    </td>
</tr>

<tr>
                  <td align="center" class="newsletterContainer" style="background-color: #ffe8de;">
                      <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                          <tr>
                              <td align="left" class="newsletterBottom35px" >
                                  <span class="newsletterTitle">
                                      ${translations[9]}
                                  </span>
                              </td>
                          </tr>
                      </table>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="background-color: #ffe8de;">
                      <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                          <tr>
                            <td align="center" class="newsletterBottom35px" >
                              <a href="https://www.youtube.com/watch?v=KsQWHKvjH-4">
                                <img width="100%" src="https://beliani.info/newsletter/2022/230911YouTubeImage.jpg" style="display: block;">
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td align="center" >
                                <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                    <tr>
                                        <td align="center" class="newsletterCtaContainer" style="text-align: center;">
                                            <a href="https://www.youtube.com/watch?v=KsQWHKvjH-4" style="color: #000000; text-decoration: underline;" class="newsletterCta">${watchNow}</a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                          </tr>
                      </table>
                  </td>
                </tr> */
}

// Id of iframe in selectors
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
