/**handles:wpforms-recaptcha**/
!function(){var e=window,t="___grecaptcha_cfg",a=e[t]=e[t]||{},c="grecaptcha",t=e[c]=e[c]||{};t.ready=t.ready||function(e){(a.fns=a.fns||[]).push(e)},e.__recaptcha_api="https://www.google.com/recaptcha/api2/",(a.render=a.render||[]).push("explicit"),(a.onload=a.onload||[]).push("wpformsRecaptchaLoad"),e.__google_recaptcha_client=!0;var c=document,t=c.createElement("script");t.type="text/javascript",t.async=!0,t.src="../www.gstatic.com/recaptcha/releases/Hq4JZivTyQ7GP8Kt571Tzodj/recaptcha__en.js",t.crossOrigin="anonymous",t.integrity="sha384-GwKBypOyKxVgSqlC8V5uL5hEQaYn4nzdnRZ1KVCvlO9ulN7S8fdp4GbtOblxm/Gh";var e=c.querySelector("script[nonce]"),e=e&&(e.nonce||e.getAttribute("nonce"));e&&t.setAttribute("nonce",e);var c=c.getElementsByTagName("script")[0];c.parentNode.insertBefore(t,c)}();