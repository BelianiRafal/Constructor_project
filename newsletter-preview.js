import { chromium, webkit, devices } from 'playwright';

async function screenshotEmail(html, deviceName, outputPath) {
  const device = devices[deviceName]; // e.g., 'iPhone 14 Pro'
  const browserType = deviceName.includes('iPhone') ? webkit : chromium;
  const browser = await browserType.launch();
  const context = await browser.newContext({ ...device });
  const page = await context.newPage();
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.screenshot({ path: outputPath, fullPage: true });
  await browser.close();
}

// Usage:

const html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
                  <title>Beliani</title>
                  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                  <meta name="x-apple-disable-message-reformatting">
                  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
                  <meta name="color-scheme" content="light only">
                  <meta name="supported-color-schemes" content="light only">
                  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&amp;subset=cyrillic-ext,latin-ext" rel="stylesheet">
                  <!--[if gte mso 7]>
                    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                        <v:fill type="tile" color="#ececec">
                    </v:background>
                  <![endif]-->
                  <!--[if gte mso 7]>
                    <style type="text/css">
                      table {
                        border-collapse: collapse;
                        border-spacing: 0;
                      }
                    </style>
                  <![endif]-->
                  <!--[if gte mso 7]>
                    <xml>
                        <o:OfficeDocumentSettings>
                        <o:AllowPNG/>
                        <o:PixelsPerInch>96</o:PixelsPerInch>
                        </o:OfficeDocumentSettings>
                    </xml>
                  <![endif]-->
              <style>
          #newsletter .newsletterSubtitleTimer {
            font-size: 30px;
            line-height: 1.25;
          }

          @media screen and (max-width: 768px) {
            #newsletter .newsletterSubtitleTimer {
              font-size: 20px !important;
            }
          }

          /* Prevent WebKit and Windows mobile changing default text sizes */
          table, td {
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
          }

          /* Remove spacing between tables in Outlook 2007 and up */
          img {
              -ms-interpolation-mode: bicubic;
          }

          .title-advantages {
            text-align: center;
            font-size: 11px;
            color: #8c8278;
            padding-bottom: 10px;
            padding-top: 10px;
            margin: 0;
          }
          
          .title-advantages-item {
            margin-left: 4px;
          }
          
          .newsletterRecommendationHeader {
            text-align: center;
            font-size: 11px;
            color: #8c8278;
            margin-bottom: 10px;
            margin-top: 10px;
          }
          
          /* NEWSLETTER START */
          
          .newsletterFreebieContainer {
            padding-left: 10px;
          }
          
          .newsletterBottom80px {
            padding-bottom: 80px;
          }
          
          .newsletterBottom10px {
            padding-bottom: 10px;
          }

          .newsletterContainer {
            padding-left: 20px;
            padding-right: 20px;
          }
          
          .newsletterCta {
            font-size: 20px;
            line-height: 1.20;
            font-family: "Open Sans", sans-serif;
          }

          .newsletterCode {
            font-size: 20px;
            line-height: 1.20;
            font-family: "Open Sans", sans-serif;
          }
          
          .newsletterBottom20px {
            padding-bottom: 20px;
          }
          
          .newsletterBottom35px {
            padding-bottom: 35px;
          }

          .newsletterBottom60px {
            padding-bottom: 60px;
          }
          
          .newsletterParagraph {
            font-size: 18px;
            font-family: "Open Sans", sans-serif;
            line-height: 1.20;
          }
          
          .newsletterTitleOfferPart {
            font-size: 30px;
            font-family: "Open Sans", sans-serif;
            line-height: 1.20;
          }
          
          .newsletterTitle {
            font-size: 30px;
            font-family: "Open Sans", sans-serif;
            line-height: 1.20;
            font-weight: 600;
          }

          .newsletterIntroTitle {
            font-size: 35px;
            font-family: "Open Sans", sans-serif;
            line-height: 1.20;
            font-weight: 600;
          }
          
          .newsletterProductTitle {
            font-size: 20px;
            font-family: "Open Sans", sans-serif;
            line-height: 1.20;
          }
          
          .newsletterProductLowPrice {
            font-size: 18px;
            font-family: "Open Sans", sans-serif;
            line-height: 1.20;
            font-weight: 600;
          }
          
          .newsletterProductHightPrice {
            font-size: 14px;
            font-family: "Open Sans", sans-serif;
            line-height: 1.20;
            text-decoration: line-through;
          }
          
          .newsletterRight10px {
            padding-right: 10px;
          }
          
          .newsletterLeft10px {
            padding-left: 10px;
          }
          
          /* NEWSLETTER END */
          
          .newsletterFooter {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          
          .newsletterConditions {
            color: black;
            font-family: "Open Sans", sans-serif;
            font-size: 8px;
          }
          
          .newsletterFooterCompanyDetails {
            vertical-align: middle;
            padding-top: 20px;
            padding-right: 0px;
            padding-bottom: 20px;
            font-size: 11px;
            font-family: "Open Sans", sans-serif !important;
            color: #000000;
            background: #ececec;
            width: 100%;
          }
          
          .newsletterFooterTitle {
            text-align: left;
            color: #000000;
            font-family: "Open Sans", sans-serif;
            font-size: 20px;
          }
          
          .newsletterProductTitleFreebie {
            text-align: center;
            font-family: "Open Sans", sans-serif;
            font-size: 20px;
          }
          
          .newsletterFooterCategoryLEFT {
            padding-bottom: 20px !important;
            padding-right: 10px !important;
          }
          
          .newsletterFooterCategoryRIGHT {
            padding-bottom: 20px !important;
            padding-left: 10px !important;
          }
          
          .newsletterFooterCategoryLEFTBottom {
            padding-right: 10px !important;
          }
          
          .newsletterFooterCategoryRIGHTBottom {
            padding-left: 10px !important;
          }
          
          .newsletterSocialIcon {
            padding-left: 25px !important;
          }
          
          .newsletterTopBottomContainer {
            padding-top: 35px !important;
            padding-bottom: 35px !important;
          }
          
          .newsletterKlarnaBannerContainer {
            padding-top: 35px !important;
            padding-bottom: 35px !important;
          }
          

          
          @media screen and (max-width: 768px) {
            .newsletterFooterCategoryLEFTBottom {
              padding-right: 5px !important;
            }
          
            .newsletterFooterCategoryRIGHTBottom {
              padding-left: 5px !important;
            }
          
            .newsletterFooterCategoryLEFT {
              padding-bottom: 10px !important;
              padding-right: 5px !important;
            }
          
            .newsletterFooterCategoryRIGHT {
              padding-bottom: 10px !important;
              padding-left: 5px !important;
            }
          
            .newsletterSocialIcon {
              padding-left: 13px !important;
            }
          
            .newsletterTopBottomContainer {
              padding-top: 20px !important;
              padding-bottom: 20px !important;
            }
          
            .newsletterFooterTitle {
              font-size: 18px;
            }
          
            .newsletterProductTitleFreebie {
              font-size: 18px;
            }
          
            .newsletterProductTitle {
              font-size: 18px;
            }
          
            .newsletterProductLowPrice {
              font-size: 16px;
            }
          
            .newsletterProductHightPrice {
              display: block;
            }
          
            .newsletterProductTitleContainer {
              padding-top: 10px;
            }
          
            .newsletterTitle {
              font-size: 25px;
            }

            .newsletterIntroTitle {
              font-size: 28px;
            }
          
            .newsletterTitleOfferPart {
              font-size: 25px;
            }
          
            .newsletterContainer {
              padding-left: 10px;
              padding-right: 10px;
            }
          
            .newsletterFreebieContainer {
              padding-left: 10px;
              padding-right: 0px !important;
            }
          
            .newsletterBottom35px {
              padding-bottom: 20px;
            }

            .newsletterBottom60px {
              padding-bottom: 40px;
            }
          
            .newsletterParagraph {
              font-size: 16px;
            }
          
            .newsletterLeft10px {
              padding-left: 5px;
            }
          
            .newsletterRight10px {
              padding-right: 5px;
            }
          
            .newsletterBottom20px {
              padding-bottom: 10px;
            }
          
            .newsletterBottom80px {
              padding-bottom: 50px;
            }
          }
          
          @media screen and (max-width: 570px) {
            .newsletterProductTitleFreebie {
              font-size: 16px;
            }
          }
          
          @media screen and (max-width: 460px) {
            .newsletterProductTitleFreebie {
              font-size: 14px;
            }
          }
          
          @media screen and (max-width: 370px) {
            .newsletterProductTitleFreebie {
              font-size: 12px;
            }
          }
    </style></head>
          
              <body class="body" width="100%" style="width:100% !important; padding:0 !important; margin:0 auto !important; font-family: 'Open Sans', sans-serif!important; font-size:13px; color:#000000; text-align:left; background-color:#ececec;">
		<!--[if gte mso 9]>
                  <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                      <v:fill type="tile" color="#ececec">
                  </v:background>
                  <![endif]-->
                  <p class="title-advantages">
                      <span class="title-advantages-item">✔️ Entrega &amp; devolución gratis</span>
                      <span class="title-advantages-item">✔️ 365 días de devolución</span>
                  </p><p class="newsletterRecommendationHeader">
                  ¿No puedes ver la Newsletter? Consulta la versión <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="[[newsshowurl]]">en línea.</a>
                  Añade Beliani a tu <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="https://www.beliani.es/content/whitelist-emails-es/">lista blanca de emails.</a>
              </p><table align="center" cellspacing="0" cellpadding="0" border="0" style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
                    <tbody>
                        <tr>
                            <th>
                                <a href="https://www.beliani.es/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076">
                                    <img src="https://upload.pictureserver.net/static/2024/header_2023_final.jpg" border="0" alt="Beliani" style="display:block; max-width: 100%;">
                                </a>
                            </th>
                        </tr>
                    </tbody>
                </table><table align="center" cellspacing="0" cellpadding="0" border="0" style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
                    <tbody>
                        <tr>
                            <th><a href="https://www.beliani.es/salon/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076"><img src="https://upload.pictureserver.net/static/2024/es_header_01.png" border="0" alt="Möbel" style="display:block; max-width: 100%;"></a></th>
                            <th><a href="https://www.beliani.es/accesorios-del-hogar/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076"><img src="https://upload.pictureserver.net/static/2024/es_header_02.png" border="0" alt="Accessoires" style="display:block; max-width: 100%;"></a></th>
                            <th><a href="https://www.beliani.es/jardin/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076"><img src="https://upload.pictureserver.net/static/2024/es_header_03.png" border="0" alt="Garten" style="display:block; max-width: 100%;"></a></th>
                        </tr>
                    </tbody>
                </table>

		<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FEBC66; color: #000; max-width: 650px; width: 100%;">
			
			<tbody><tr>
				<td style="line-height: 0; font-size: 0; padding: 0;">
					<a href="https://www.beliani.es/content/lp25-07-17?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
						<img alt="" src="https://pictureserver.net/static/2025/es20250717_TopImageTitle.png?ver=251" style="display: block; width: 100%; max-width: 100%; height: auto; border: 0; line-height: 0;" loading="lazy">
					</a>
				</td>
			</tr>
		</tbody></table>

		<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FEBC66; color: #000; max-width: 650px; width: 100%;">
			</table><table cellspacing="0" cellpadding="0" border="0" align="center" style="max-width: 650px; width: 100%;">
				<tbody>
					<tr>
						<td align="center">
							<a href="https://www.beliani.es/content/lp25-07-17?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076">
								<img src="https://pictureserver.net/static/2025/20250717_TopImage.gif?ver=251" style="vertical-align: middle; max-width: 100%;" loading="lazy">
							</a>
						</td>
					</tr>
				</tbody>
			</table>
		
		
		<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FEBC66; color: #000; max-width: 650px; width: 100%;">
			<tbody><tr>
				<td>
					<table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="background: #FEBC66; color: #000000;"><tbody>
		<tr>
			<td class="newsletterBottom35px">
			</td>
		</tr>
  
    <tr>
      <td>
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
          <tbody>
            <tr>
              <td class="newsletterContainer" align="center">
                <span class="newsletterParagraph" style="display: block;">
                  Descubre cuatro estilos de comedor y observa cómo los muebles adecuados pueden transformar tu espacio con color, ambiente y carácter.
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
		<tr>
			<td class="newsletterBottom35px">
			</td>
		</tr>
  </tbody></table>
				</td>
			</tr>
		</tbody></table>
		
		<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FEBC66; color: #000; max-width: 650px; width: 100%;">
			<tbody><tr>
				<td>
					
  <table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FFCCB7; color: #000000; max-width: 650px; width: 100%;">

		<tbody><tr>
			<td style="background-color: #FFCCB7; padding-bottom: 10px;"></td>
		</tr>    
		
		<tr>
      <td align="center">
        <span class="newsletterSubtitleTimer" style="color: #000000">
          La oferta Sombrilla gratis
        </span>
      </td>
    </tr>

    <tr>
      <td align="center">
        <span class="newsletterSubtitleTimer" style="color: #000000">
          termina en:
        </span>
      </td>
    </tr>
    
		
		<tr>
			<td class="newsletterBottom20px">
			</td>
		</tr>
  
    
		<tr>
      <td align="center" style="padding-left: 60px; padding-right: 60px;">
				
  <table border="0" cellspacing="0" cellpadding="0" width="100%">
        <tbody>
            <tr>
                <td align="center">
                    <a href="https://www.beliani.es/content/lp25-07-14?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076">
                        <img alt="" src="https://gen.sendtric.com/countdown/qt3nxenv50" style="vertical-align: text-top; max-width: 100%;" loading="lazy">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
  
      </td>
    </tr>
    
		
		<tr>
			<td class="newsletterBottom20px">
			</td>
		</tr>
  
    
		<tr>
      <td align="center">
        <a href="https://www.beliani.es/content/lp25-07-14?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="color: #000000; text-decoration: underline;">
          <span class="newsletterCta">Compra ahora</span>
        </a>
      </td>
    </tr>

		
		<tr>
			<td class="newsletterBottom20px">
			</td>
		</tr>
  

		<tr>
			<td align="center">
				
  <table border="0" cellspacing="0" cellpadding="0" width="100%">
        <tbody>
            <tr>
                <td align="center">
                    <a href="https://www.beliani.es/content/lp25-07-14?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076">
                        <img alt="" src="https://pictureserver.net/static/2025/20250717_freebies_1.png?ver=251" style="vertical-align: text-top; max-width: 100%;" loading="lazy">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
  
			</td>
		</tr>
  </tbody></table>
  
				</td>
			</tr>
		</tbody></table>

		<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FEBC66; color: #000; max-width: 650px; width: 100%;">
		
			<tbody><tr>
				<td>
					<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FEBC66; color: #000; max-width: 650px; width: 100%;">
						<tbody><tr>
							<td width="100%">
								<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FEBC66; color: #000; max-width: 650px; width: 100%;">
									<tbody><tr>
										<td width="100%">
											<table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="background: #FEBC66; color: #000;"><tbody>
		<tr>
			<td class="newsletterBottom35px">
			</td>
		</tr>
  
    <tr>
      <td>
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
          <tbody>
            <tr>
              <td class="newsletterContainer" align="center">
                <span class="newsletterTitle">
                  Brillo de limón
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
		<tr>
			<td class="newsletterBottom35px">
			</td>
		</tr>
  
    <tr>
      <td>
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
          <tbody>
            <tr>
              <td class="newsletterContainer" align="center">
                <span class="newsletterParagraph" style="display: block;">
                  Lleva la luz del sol al interior con muebles y accesorios en cálidos tonos amarillos que iluminan al instante cualquier espacio.
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
		<tr>
			<td class="newsletterBottom35px">
			</td>
		</tr>
  </tbody></table>
										</td>
									</tr>	
								</tbody></table>

								<!-- START A -->
								<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FEBC66; color: #000; max-width: 650px; width: 100%;">
									<tbody><tr width="100%">
										<td width="30%" valign="top">
											
			<a align="left" href="https://www.beliani.es/conjunto-de-2-sillas-de-comedor-de-terciopelo-amarillo-augusta.html?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="" align="left" src="https://pictureserver.net/static/2025/20250717_Cat_1_Prod_1.png?ver=251" style="display: block; max-width: 100%; height: auto; float: left; " loading="lazy">
			</a>
			
										</td>
										
										<td width="70%" rowspan="2">
											
			<a align="right" href="https://www.beliani.es/comedor?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="Brillo de limón" align="right" src="https://pictureserver.net/static/2025/20250717_Cat_1a.png?ver=170" style="display: block; max-width: 100%; height: auto; float: right; " loading="lazy">
			</a>
			
										</td>
									</tr>
								</tbody></table>

								<!-- START B -->
								<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FEBC66; color: #000; max-width: 650px; width: 100%;">
									<tbody><tr width="100%">
										<td width="30%" valign="top">
											
			<a align="left" href="https://www.beliani.es/mesa-de-comedor-en-madera-clara-160-x-90-cm-barnes.html?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="" align="left" src="https://pictureserver.net/static/2025/20250717_Cat_1_Prod_2.png?ver=251" style="display: block; max-width: 100%; height: auto; float: left; " loading="lazy">
			</a>
			
										</td>
										
										<td width="70%" rowspan="2">
											
			<a align="right" href="https://www.beliani.es/comedor?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="Brillo de limón" align="right" src="https://pictureserver.net/static/2025/20250717_Cat_1b.png?ver=170" style="display: block; max-width: 100%; height: auto; float: right; " loading="lazy">
			</a>
			
										</td>
									</tr>
								</tbody></table>

								<!-- START C -->
								<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FEBC66; color: #000; max-width: 650px; width: 100%;">
									<tbody><tr width="100%">
										<td width="30%" valign="top">
											
			<a align="left" href="https://www.beliani.es/jarron-de-vidrio-amarillo-30-cm-paneer.html?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="" align="left" src="https://pictureserver.net/static/2025/20250717_Cat_1_Prod_3.png?ver=251" style="display: block; max-width: 100%; height: auto; float: left; " loading="lazy">
			</a>
			
										</td>
										
										<td width="70%" rowspan="2">
											
			<a align="right" href="https://www.beliani.es/comedor?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="Brillo de limón" align="right" src="https://pictureserver.net/static/2025/20250717_Cat_1c.png?ver=158" style="display: block; max-width: 100%; height: auto; float: right; " loading="lazy">
			</a>
			
										</td>
									</tr>
								</tbody></table>

								<!-- START D -->
								<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FEBC66; color: #000; max-width: 650px; width: 100%;">
									<tbody><tr width="100%">
										<td width="30%" valign="top">
											
			<a align="left" href="https://www.beliani.es/espejo-de-pared-de-ratan-vidrio-natural-o-60-cm-kalasin.html?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="" align="left" src="https://pictureserver.net/static/2025/20250717_Cat_1_Prod_4.png?ver=251" style="display: block; max-width: 100%; height: auto; float: left; " loading="lazy">
			</a>
			
										</td>
										
										<td width="70%" rowspan="2">
											
			<a align="right" href="https://www.beliani.es/comedor?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="Brillo de limón" align="right" src="https://pictureserver.net/static/2025/20250717_Cat_1d.png?ver=158" style="display: block; max-width: 100%; height: auto; float: right; " loading="lazy">
			</a>
			
										</td>
									</tr>
								</tbody></table>



								<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FEBC66; color: #000; max-width: 650px; width: 100%;">
									<tbody><tr>
										<td>
											
		</td></tr><tr>
			<td class="newsletterBottom35px">
			</td>
		</tr>
  
		<tr><td width="100%" style="text-align: center; color: #000000; text-decoration: underline;">
			<a href="https://www.beliani.es/comedor?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="color: #000; text-decoration: underline;">
				<span class="newsletterCta">Compra ahora</span>
			</a>
		</td>
	
		</tr><tr>
			<td class="newsletterBottom80px">
			</td>
		</tr>
  
										
									
								</tbody></table>
								
							</td>
						</tr>
					</tbody></table>
				</td>
			</tr>
		
			<tr>
				<td>
					<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FEBC66; color: #000; max-width: 650px; width: 100%;">
						<tbody><tr>
							<td width="100%">
								<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FFB6A6; color: #000; max-width: 650px; width: 100%;">
									<tbody><tr>
										<td width="100%">
											<table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="background: #FFB6A6; color: #000;"><tbody>
		<tr>
			<td class="newsletterBottom35px">
			</td>
		</tr>
  
    <tr>
      <td>
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
          <tbody>
            <tr>
              <td class="newsletterContainer" align="center">
                <span class="newsletterTitle">
                  Vibraciones retro
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
		<tr>
			<td class="newsletterBottom35px">
			</td>
		</tr>
  
    <tr>
      <td>
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
          <tbody>
            <tr>
              <td class="newsletterContainer" align="center">
                <span class="newsletterParagraph" style="display: block;">
                  Canaliza el estilo cool de mediados de siglo con siluetas atrevidas, acabados en nogal y muebles de comedor de inspiración vintage.
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
		<tr>
			<td class="newsletterBottom35px">
			</td>
		</tr>
  </tbody></table>
										</td>
									</tr>	
								</tbody></table>

								<!-- START A -->
								<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FFB6A6; color: #000; max-width: 650px; width: 100%;">
									<tbody><tr width="100%">
										<td width="30%" valign="top">
											
			<a align="left" href="https://www.beliani.es/conjunto-de-2-sillas-de-comedor-amarillo-mostaza-chicago.html?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="" align="left" src="https://pictureserver.net/static/2025/20250717_Cat_2_Prod_1.png?ver=251" style="display: block; max-width: 100%; height: auto; float: left; " loading="lazy">
			</a>
			
										</td>
										
										<td width="70%" rowspan="2">
											
			<a align="right" href="https://www.beliani.es/comedor?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="Vibraciones retro" align="right" src="https://pictureserver.net/static/2025/20250717_Cat_2a.png?ver=158" style="display: block; max-width: 100%; height: auto; float: right; " loading="lazy">
			</a>
			
										</td>
									</tr>
								</tbody></table>

								<!-- START B -->
								<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FFB6A6; color: #000; max-width: 650px; width: 100%;">
									<tbody><tr width="100%">
										<td width="30%" valign="top">
											
			<a align="left" href="https://www.beliani.es/mesa-de-comedor-negra-o-90-cm-boca.html?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="" align="left" src="https://pictureserver.net/static/2025/20250717_Cat_2_Prod_2.png?ver=251" style="display: block; max-width: 100%; height: auto; float: left; " loading="lazy">
			</a>
			
										</td>
										
										<td width="70%" rowspan="2">
											
			<a align="right" href="https://www.beliani.es/comedor?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="Vibraciones retro" align="right" src="https://pictureserver.net/static/2025/20250717_Cat_2b.png?ver=158" style="display: block; max-width: 100%; height: auto; float: right; " loading="lazy">
			</a>
			
										</td>
									</tr>
								</tbody></table>

								<!-- START C -->
								<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FFB6A6; color: #000; max-width: 650px; width: 100%;">
									<tbody><tr width="100%">
										<td width="30%" valign="top">
											
			<a align="left" href="https://www.beliani.es/florero-de-vidrio-naranja-20-cm-platania.html?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="" align="left" src="https://pictureserver.net/static/2025/20250717_Cat_2_Prod_3.png?ver=251" style="display: block; max-width: 100%; height: auto; float: left; " loading="lazy">
			</a>
			
										</td>
										
										<td width="70%" rowspan="2">
											
			<a align="right" href="https://www.beliani.es/comedor?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="Vibraciones retro" align="right" src="https://pictureserver.net/static/2025/20250717_Cat_2c.png?ver=158" style="display: block; max-width: 100%; height: auto; float: right; " loading="lazy">
			</a>
			
										</td>
									</tr>
								</tbody></table>

								<!-- START D -->
								<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FFB6A6; color: #000; max-width: 650px; width: 100%;">
									<tbody><tr width="100%">
										<td width="30%" valign="top">
											
			<a align="left" href="https://www.beliani.es/lampara-colgante-negro-dorado-maritsa.html?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="" align="left" src="https://pictureserver.net/static/2025/20250717_Cat_2_Prod_4.png?ver=251" style="display: block; max-width: 100%; height: auto; float: left; " loading="lazy">
			</a>
			
										</td>
										
										<td width="70%" rowspan="2">
											
			<a align="right" href="https://www.beliani.es/comedor?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="Vibraciones retro" align="right" src="https://pictureserver.net/static/2025/20250717_Cat_2d.png?ver=158" style="display: block; max-width: 100%; height: auto; float: right; " loading="lazy">
			</a>
			
										</td>
									</tr>
								</tbody></table>



								<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FFB6A6; color: #000; max-width: 650px; width: 100%;">
									<tbody><tr>
										<td>
											
		</td></tr><tr>
			<td class="newsletterBottom35px">
			</td>
		</tr>
  
		<tr><td width="100%" style="text-align: center; color: #000000; text-decoration: underline;">
			<a href="https://www.beliani.es/comedor?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="color: #000; text-decoration: underline;">
				<span class="newsletterCta">Compra ahora</span>
			</a>
		</td>
	
		</tr><tr>
			<td class="newsletterBottom80px">
			</td>
		</tr>
  
										
									
								</tbody></table>
								
							</td>
						</tr>
					</tbody></table>
				</td>
			</tr>
		
			<tr>
				<td>
					<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FEBC66; color: #000; max-width: 650px; width: 100%;">
						<tbody><tr>
							<td width="100%">
								<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FEBC66; color: #000; max-width: 650px; width: 100%;">
									<tbody><tr>
										<td width="100%">
											<table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="background: #FEBC66; color: #000;"><tbody>
		<tr>
			<td class="newsletterBottom35px">
			</td>
		</tr>
  
    <tr>
      <td>
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
          <tbody>
            <tr>
              <td class="newsletterContainer" align="center">
                <span class="newsletterTitle">
                  Luz de Lisboa
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
		<tr>
			<td class="newsletterBottom35px">
			</td>
		</tr>
  
    <tr>
      <td>
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
          <tbody>
            <tr>
              <td class="newsletterContainer" align="center">
                <span class="newsletterParagraph" style="display: block;">
                  Deja que la luz natural y los ricos tonos de la madera definan tu comedor con piezas atemporales que reflejan el encanto natural de Lisboa.
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
		<tr>
			<td class="newsletterBottom35px">
			</td>
		</tr>
  </tbody></table>
										</td>
									</tr>	
								</tbody></table>

								<!-- START A -->
								<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FEBC66; color: #000; max-width: 650px; width: 100%;">
									<tbody><tr width="100%">
										<td width="30%" valign="top">
											
			<a align="left" href="https://www.beliani.es/conjunto-de-2-sillas-de-madera-de-caucho-oscura-gris-elmira.html?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="" align="left" src="https://pictureserver.net/static/2025/20250717_Cat_3_Prod_1.png?ver=251" style="display: block; max-width: 100%; height: auto; float: left; " loading="lazy">
			</a>
			
										</td>
										
										<td width="70%" rowspan="2">
											
			<a align="right" href="https://www.beliani.es/comedor?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="Luz de Lisboa" align="right" src="https://pictureserver.net/static/2025/20250717_Cat_3a.png?ver=158" style="display: block; max-width: 100%; height: auto; float: right; " loading="lazy">
			</a>
			
										</td>
									</tr>
								</tbody></table>

								<!-- START B -->
								<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FEBC66; color: #000; max-width: 650px; width: 100%;">
									<tbody><tr width="100%">
										<td width="30%" valign="top">
											
			<a align="left" href="https://www.beliani.es/mesa-de-comedor-redonda-negra-o-120-cm-oxhill.html?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="" align="left" src="https://pictureserver.net/static/2025/20250717_Cat_3_Prod_2.png?ver=251" style="display: block; max-width: 100%; height: auto; float: left; " loading="lazy">
			</a>
			
										</td>
										
										<td width="70%" rowspan="2">
											
			<a align="right" href="https://www.beliani.es/comedor?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="Luz de Lisboa" align="right" src="https://pictureserver.net/static/2025/20250717_Cat_3b.png?ver=158" style="display: block; max-width: 100%; height: auto; float: right; " loading="lazy">
			</a>
			
										</td>
									</tr>
								</tbody></table>

								<!-- START C -->
								<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FEBC66; color: #000; max-width: 650px; width: 100%;">
									<tbody><tr width="100%">
										<td width="30%" valign="top">
											
			<a align="left" href="https://www.beliani.es/jarron-de-terracota-naranja-37-cm-karfi.html?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="" align="left" src="https://pictureserver.net/static/2025/20250717_Cat_3_Prod_3.png?ver=251" style="display: block; max-width: 100%; height: auto; float: left; " loading="lazy">
			</a>
			
										</td>
										
										<td width="70%" rowspan="2">
											
			<a align="right" href="https://www.beliani.es/comedor?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="Luz de Lisboa" align="right" src="https://pictureserver.net/static/2025/20250717_Cat_3c.png?ver=158" style="display: block; max-width: 100%; height: auto; float: right; " loading="lazy">
			</a>
			
										</td>
									</tr>
								</tbody></table>

								<!-- START D -->
								<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FEBC66; color: #000; max-width: 650px; width: 100%;">
									<tbody><tr width="100%">
										<td width="30%" valign="top">
											
			<a align="left" href="https://www.beliani.es/lampara-de-techo-de-poliester-ratan-algodon-natural-beige-claro-172-cm-yumuri.html?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="" align="left" src="https://pictureserver.net/static/2025/20250717_Cat_3_Prod_4.png?ver=251" style="display: block; max-width: 100%; height: auto; float: left; " loading="lazy">
			</a>
			
										</td>
										
										<td width="70%" rowspan="2">
											
			<a align="right" href="https://www.beliani.es/comedor?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="Luz de Lisboa" align="right" src="https://pictureserver.net/static/2025/20250717_Cat_3d.png?ver=158" style="display: block; max-width: 100%; height: auto; float: right; " loading="lazy">
			</a>
			
										</td>
									</tr>
								</tbody></table>



								<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FEBC66; color: #000; max-width: 650px; width: 100%;">
									<tbody><tr>
										<td>
											
		</td></tr><tr>
			<td class="newsletterBottom35px">
			</td>
		</tr>
  
		<tr><td width="100%" style="text-align: center; color: #000000; text-decoration: underline;">
			<a href="https://www.beliani.es/comedor?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="color: #000; text-decoration: underline;">
				<span class="newsletterCta">Compra ahora</span>
			</a>
		</td>
	
		</tr><tr>
			<td class="newsletterBottom80px">
			</td>
		</tr>
  
										
									
								</tbody></table>
								
							</td>
						</tr>
					</tbody></table>
				</td>
			</tr>
		
			<tr>
				<td>
					<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FEBC66; color: #000; max-width: 650px; width: 100%;">
						<tbody><tr>
							<td width="100%">
								<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FFB6A6; color: #000; max-width: 650px; width: 100%;">
									<tbody><tr>
										<td width="100%">
											<table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="background: #FFB6A6; color: #000;"><tbody>
		<tr>
			<td class="newsletterBottom35px">
			</td>
		</tr>
  
    <tr>
      <td>
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
          <tbody>
            <tr>
              <td class="newsletterContainer" align="center">
                <span class="newsletterTitle">
                  Ambiente wabi sabi
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
		<tr>
			<td class="newsletterBottom35px">
			</td>
		</tr>
  
    <tr>
      <td>
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
          <tbody>
            <tr>
              <td class="newsletterContainer" align="center">
                <span class="newsletterParagraph" style="display: block;">
                  Celebra la belleza imperfecta con madera sin tratar, formas orgánicas y muebles de comedor que transmiten serenidad a través de la simplicidad y las texturas naturales.
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
		<tr>
			<td class="newsletterBottom35px">
			</td>
		</tr>
  </tbody></table>
										</td>
									</tr>	
								</tbody></table>

								<!-- START A -->
								<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FFB6A6; color: #000; max-width: 650px; width: 100%;">
									<tbody><tr width="100%">
										<td width="30%" valign="top">
											
			<a align="left" href="https://www.beliani.es/silla-de-comedor-de-caoba-marron-natural-madera-clara-westbrook.html?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="" align="left" src="https://pictureserver.net/static/2025/20250717_Cat_4_Prod_1.png?ver=251" style="display: block; max-width: 100%; height: auto; float: left; " loading="lazy">
			</a>
			
										</td>
										
										<td width="70%" rowspan="2">
											
			<a align="right" href="https://www.beliani.es/comedor?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="Ambiente wabi sabi" align="right" src="https://pictureserver.net/static/2025/20250717_Cat_4a.png?ver=158" style="display: block; max-width: 100%; height: auto; float: right; " loading="lazy">
			</a>
			
										</td>
									</tr>
								</tbody></table>

								<!-- START B -->
								<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FFB6A6; color: #000; max-width: 650px; width: 100%;">
									<tbody><tr width="100%">
										<td width="30%" valign="top">
											
			<a align="left" href="https://www.beliani.es/mesa-de-comedor-madera-clara-o-120-cm-orin.html?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="" align="left" src="https://pictureserver.net/static/2025/20250717_Cat_4_Prod_2.png?ver=251" style="display: block; max-width: 100%; height: auto; float: left; " loading="lazy">
			</a>
			
										</td>
										
										<td width="70%" rowspan="2">
											
			<a align="right" href="https://www.beliani.es/comedor?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="Ambiente wabi sabi" align="right" src="https://pictureserver.net/static/2025/20250717_Cat_4b.png?ver=158" style="display: block; max-width: 100%; height: auto; float: right; " loading="lazy">
			</a>
			
										</td>
									</tr>
								</tbody></table>

								<!-- START C -->
								<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FFB6A6; color: #000; max-width: 650px; width: 100%;">
									<tbody><tr width="100%">
										<td width="30%" valign="top">
											
			<a align="left" href="https://www.beliani.es/florero-de-porcelana-negra-30-cm-lamia.html?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="" align="left" src="https://pictureserver.net/static/2025/20250717_Cat_4_Prod_3.png?ver=251" style="display: block; max-width: 100%; height: auto; float: left; " loading="lazy">
			</a>
			
										</td>
										
										<td width="70%" rowspan="2">
											
			<a align="right" href="https://www.beliani.es/comedor?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="Ambiente wabi sabi" align="right" src="https://pictureserver.net/static/2025/20250717_Cat_4c.png?ver=158" style="display: block; max-width: 100%; height: auto; float: right; " loading="lazy">
			</a>
			
										</td>
									</tr>
								</tbody></table>

								<!-- START D -->
								<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FFB6A6; color: #000; max-width: 650px; width: 100%;">
									<tbody><tr width="100%">
										<td width="30%" valign="top">
											
			<a align="left" href="https://www.beliani.es/lampara-colgante-de-papel-beige-herron.html?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="" align="left" src="https://pictureserver.net/static/2025/20250717_Cat_4_Prod_4.png?ver=251" style="display: block; max-width: 100%; height: auto; float: left; " loading="lazy">
			</a>
			
										</td>
										
										<td width="70%" rowspan="2">
											
			<a align="right" href="https://www.beliani.es/comedor?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="display: block; text-decoration: none;">
				<img alt="Ambiente wabi sabi" align="right" src="https://pictureserver.net/static/2025/20250717_Cat_4d.png?ver=158" style="display: block; max-width: 100%; height: auto; float: right; " loading="lazy">
			</a>
			
										</td>
									</tr>
								</tbody></table>



								<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: #FFB6A6; color: #000; max-width: 650px; width: 100%;">
									<tbody><tr>
										<td>
											
		</td></tr><tr>
			<td class="newsletterBottom35px">
			</td>
		</tr>
  
		<tr><td width="100%" style="text-align: center; color: #000000; text-decoration: underline;">
			<a href="https://www.beliani.es/comedor?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076" style="color: #000; text-decoration: underline;">
				<span class="newsletterCta">Compra ahora</span>
			</a>
		</td>
	
		</tr><tr>
			<td class="newsletterBottom80px">
			</td>
		</tr>
  
										
									
								</tbody></table>
								
							</td>
						</tr>
					</tbody></table>
				</td>
			</tr>
		
		</tbody></table>


		<table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterContainer" style="margin: 0 auto; max-width: 650px; color: #000000; background-color:#ffffff;" id="newsletter">
			<tbody>
				<tr>
					<td>
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody>
            <tr>
                <td>
                    <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
                </td>
            </tr>
        </tbody>
    </table>
    </td>
				</tr>
				
				<tr>
					<td class="newsletterBottom35px">
					</td>
				</tr>

				<tr>
					<td align="left" class="newsletterBottom35px">
						<span class="newsletterFooterTitle">Aprovecha las ofertas por tiempo limitado</span>
					</td>
				</tr>

				<tr>
					<td align="left" class="newsletterBottom20px" style="line-height: 0; font-size: 0;">
						<a href="https://www.beliani.es/content/lp25-07-10?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076">
							<img loading="lazy" src="https://pictureserver.net/static/2025/es20250710b.png?ver=251" style="display: block; width: 100%; max-width: 100%; border: 0;" alt="">
						</a>
					</td>
				</tr>
				
				<tr>
					<td align="left" class="newsletterBottom35px" style="line-height: 0; font-size: 0;">
						<a href="https://www.beliani.es/content/lp25-07-09?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076">
							<img loading="lazy" src="https://pictureserver.net/static/2025/es20250709b.png?ver=251" style="display: block; width: 100%; max-width: 100%; border: 0;" alt="">
						</a>
					</td>
				</tr>

			</tbody>
		</table>

		
        <table class="newsletterContainer" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width: 650px; width: 100%; background-color: #ffffff;">
            <tbody>
                <tr>
                    <td class="newsletterBottom35px">
                        
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody>
            <tr>
                <td>
                    <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
                </td>
            </tr>
        </tbody>
    </table>
    
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="https://www.beliani.es/content/servicios-de-entrega/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076">
                            <img loading="lazy" src="https://pictureserver.net/static/2024/es_bottom_ab.jpg?ver=334" width="610" style="display: block; max-width: 610px; width: 100%">
                        </a>
                    </td>
                </tr>
                <tr>
                    <td class="newsletterBottom35px">
                    </td>
                </tr>
            </tbody>
        </table>
        
        <table cellspacing="0" class="newsletterContainer" cellpadding="0" border="0" align="center" style="background-color: #ffffff;">
            <tbody>
                <tr>
                    <td>
                        <img loading="lazy" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block; max-width: 100%;" alt="">
                    </td>
                </tr>
                <tr>
                    <td class="newsletterTopBottomContainer">
                        <span class="newsletterFooterTitle">
                            Ver mucho más
                        </span>
                    </td>
                </tr>
                <tr>
                    <td class="newsletterBottom35px">
                        <table cellspacing="0" cellpadding="0" border="0" align="center">
                            <tbody>
                                <tr>
                                    <td class="newsletterFooterCategoryLEFT">
                                        <a href="https://www.beliani.es/sofas/todos+los+productos?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076">
                                            <img loading="lazy" src="https://pictureserver.net/static/2024/es_cat_01.png?ver=334" alt="" style="display:block; max-width: 100%;" border="0">
                                        </a>
                                    </td>
                                    <td class="newsletterFooterCategoryRIGHT">
                                        <a href="https://www.beliani.es/camas/todos+los+productos?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076">
                                            <img loading="lazy" src="https://pictureserver.net/static/2024/es_cat_02.png?ver=334" alt="" style="display:block; max-width: 100%;" border="0">
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="newsletterFooterCategoryLEFT">
                                        <a href="https://www.beliani.es/mesas/mesas-de-centro?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076">
                                            <img loading="lazy" src="https://pictureserver.net/static/2024/es_cat_03.png?ver=334" alt="" style="display:block; max-width: 100%;" border="0">
                                        </a>
                                    </td>
                                    <td class="newsletterFooterCategoryRIGHT">
                                        <a href="https://www.beliani.es/sillas/todos+los+productos?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076">
                                            <img loading="lazy" src="https://pictureserver.net/static/2024/es_cat_04.png?ver=334" alt="" style="display:block; max-width: 100%;" border="0">
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="newsletterFooterCategoryLEFT">
                                        <a href="https://www.beliani.es/sillones/todos+los+productos?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076">
                                            <img loading="lazy" src="https://pictureserver.net/static/2024/es_cat_05.png?ver=334" alt="" style="display:block; max-width: 100%;" border="0">
                                        </a>
                                    </td>
                                    <td class="newsletterFooterCategoryRIGHT">
                                        <a href="https://www.beliani.es/organizacion-y-almacenaje/aparadores?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076">
                                            <img loading="lazy" src="https://pictureserver.net/static/2024/es_cat_06.png?ver=334" alt="" style="display:block; max-width: 100%;" border="0">
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="newsletterFooterCategoryLEFTBottom">
                                        <a href="https://www.beliani.es/lamparas/todos+los+productos?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076">
                                            <img loading="lazy" src="https://pictureserver.net/static/2024/es_cat_07.png?ver=334" alt="" style="display:block; max-width: 100%;" border="0">
                                        </a>
                                    </td>
                                    <td class="newsletterFooterCategoryRIGHTBottom">
                                        <a href="https://www.beliani.es/alfombras/todos+los+productos?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076">
                                            <img loading="lazy" src="https://pictureserver.net/static/2024/es_cat_08.png?ver=334" alt="" style="display:block; max-width: 100%;" border="0">
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                            </tbody>
        </table>
                
        <table class="newsletterContainer" cellspacing="0" cellpadding="0" border="0" align="center" style="background-color: #ffffff;">
            <tbody>
                    <tr>
                        <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block; max-width: 100%;"></td>
                    </tr>
                  <!--KLARNA-->
                    <tr>
                        <td class="newsletterTopBottomContainer">
                            <a href="https://www.beliani.es/content/metodos-de-pago/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076">
                                <img alt="" border="0" src="https://pictureserver.net/static/2024/es_klarna.png?ver=334" style="display:block; max-width: 100%;">
                            </a>
                        </td>
                    </tr>
            </tbody>
        </table>
        
            <table class="newsletterContainer" cellspacing="0" cellpadding="0" border="0" align="center" style="background-color: #ffffff;">
            <tbody>
                <tr>
                    <td>
                        <img loading="lazy" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block; max-width: 100%;" alt="">
                    </td>
                </tr>
                <tr>
                    <td align="center">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                            <tbody>
                                <tr>
                                    <td align="left" class="footer">
                                        <table cellpadding="0" cellspacing="0" border="0">
                                            <tbody>
                                                <tr>
                                                    <td class="newsletterTopBottomContainer">
                                                        <span class="newsletterFooterTitle">
                                                              Síguenos
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                                        <table cellpadding="0" cellspacing="0" border="0">
                                            <tbody>
                                                <tr>
                                                    <td class="newsletterSocialIcon">
                                                        <a href="https://www.instagram.com/beliani.espana/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076">
                                                            <img loading="lazy" src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg?ver=334" border="0" style="display:block; max-width: 100%;" alt="Instagram">
                                                        </a>
                                                    </td>
                                                    <td class="newsletterSocialIcon">
                                                        <a href="https://www.facebook.com/beliani.espana/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076">
                                                            <img loading="lazy" src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg?ver=334" border="0" style="display:block; max-width: 100%;" alt="Facebook">
                                                        </a>
                                                    </td>
                                                    
                                                        <td class="newsletterSocialIcon">
                                                            <a href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076">
                                                                <img loading="lazy" src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg?ver=334" border="0" style="display:block; max-width: 100%;" alt="YouTube">
                                                            </a>
                                                        </td>
                                                        
                                                    <td class="newsletterSocialIcon">
                                                        <a href="https://www.pinterest.com/belianies/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076">
                                                            <img loading="lazy" src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg?ver=334" border="0" style="display:block; max-width: 100%;" alt="Pinterest">
                                                        </a>
                                                    </td>
                                                    
                                                        <td class="newsletterSocialIcon">
                                                            <a href="https://x.com/Beliani_Europe?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076">
                                                                <img loading="lazy" src="https://pictureserver.net/static/2024/footerXlogo2024.jpg?ver=334" border="0" style="display:block; max-width: 100%;" alt="Pinterest">
                                                            </a>
                                                        </td>   
                                                        
                                                    
                                                        <td class="newsletterSocialIcon">
                                                            <a href="https://www.tiktok.com/@beliani_europe?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076">
                                                                <img loading="lazy" src="https://pictureserver.net/static/2024/footerTIKTOKlogo2024.jpg?ver=334" border="0" style="display:block; max-width: 100%;" alt="Pinterest">
                                                            </a>
                                                        </td>   
                                                        
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                            </tbody>
        </table>
                
        <table cellspacing="0" class="newsletterContainer" cellpadding="0" border="0" align="center" style="background-color: #ffffff;">
            <tbody>
                <tr>
                    <td>
                        <img loading="lazy" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block; max-width: 100%;" alt="">
                    </td>
                </tr>
                <!-- ADVANTAGES -->
                <tr>
                    <td class="newsletterTopBottomContainer">
                        <table cellspacing="0" cellpadding="0" border="0" style="background-color: #f5f5f5;">
                            <tbody>
                                <tr>
                                    <td>
                                        <a href="https://www.beliani.es/content/envio/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076">
                                            <img loading="lazy" src="https://pictureserver.net/static/2024/es_usp_01.png?ver=334" alt="" style="display:block; max-width: 100%;" border="0">
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="https://www.beliani.es/content/sobre-nosotros/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076">
                                            <img loading="lazy" src="https://pictureserver.net/static/2024/es_usp_02.png?ver=334" alt="" style="display:block; max-width: 100%;" border="0">
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="https://www.beliani.es/content/condiciones-generales/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076">
                                            <img loading="lazy" src="https://pictureserver.net/static/2024/es_usp_04.png?ver=334" alt="" style="display:block; max-width: 100%;" border="0">
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="https://www.beliani.es/content/centro-de-ayuda/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=35076">
                                            <img loading="lazy" src="https://pictureserver.net/static/2024/es_usp_03.png?ver=334" alt="" style="display:block; max-width: 100%;" border="0">
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                            </tbody>
        </table>
                
        <table class="newsletterContainer" cellspacing="0" cellpadding="0" border="0" align="center" width="650" style="max-width: 650px; width: 100%; background-color: #ffffff;">
            <tbody>
                <tr>
                    <td>
                        <img loading="lazy" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block; max-width: 100%;" alt="">
                    </td>
                </tr>
                <tr>
                    <td class="newsletterTopBottomContainer" align="left">
                        <span class="newsletterConditions" style="color: #000000;">*Condiciones: Los artículos están sujetos a disponibilidad. Los precios pueden variar sin notificación previa. Si deseas darte de baja del boletín, puedes hacerlo haciendo clic en el enlace <a href="[[newsunassignurl]]" style="text-decoration:none;color:#000000;">Cancelar suscripción</a>.</span>
                    </td>
                </tr>
            </tbody>
        </table>
        
        <table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter">
            <tbody>
                <tr>
                    <td align="center" class="newsletterFooterCompanyDetails">
                        <span style="color: #000000;text-align: center; font-size:11px;">
                            <b><font style="font-size: 11px;">Datos de empresa</font></b>
                            <br>Beliani (DE) GmbH 6340 Baar Suiza<br>Teléfono: 932 714 061; e-mail:
                            <a href="mailto:mail@beliani.es">mail@beliani.es</a>
                            <br>Registro comercial: CHE-115.695.894<br>USt-IDNr: DE 276156472
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
                

	</body></html>`


screenshotEmail(html, 'iPhone 11', 'iphone.png');
screenshotEmail(html, 'Desktop Chrome', 'chrome.png');