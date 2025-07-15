<tr>
				<td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
					<table cellspacing="0" cellpadding="0" style="width: 100%;">
						<tr>
							<td class="newsletterBottom20px">
								<!-- 1-2 Products table -->
								<table cellspacing="0" cellpadding="0" style="width: 100%; ">
									<tr>
										<!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
										<td style="padding-top: 0px; padding-left: 0px; vertical-align: top; width: 50%" class="newsletterRight10px">
											${Product(
												products[0],
												"left",
												`color: ${color || "#000000"}`
											)}
										</td>
										<!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
										<td style="padding-top: 0px; padding-right: 0px; vertical-align: top; width: 50%" class="newsletterLeft10px">
											${Product(
												products[1],
												"left",
												`color: ${color || "#000000"}`
											)}
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr>
							<td>
								<!-- 3-4 Products table -->
								<table cellspacing="0" cellpadding="0" style="width: 100%; ">
									<tr>
										<!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
										<td style="padding-top: 0px; padding-left: 0px; vertical-align: top; width: 50%" class="newsletterRight10px">
											${Product(
												products[2],
												"left",
												`color: ${color || "#000000"}`
											)}
										</td>
										<!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
										<td style="padding-top: 0px; padding-right: 0px; vertical-align: top; width: 50%" class="newsletterLeft10px">
											${Product(
												products[3],
												"left",
												`color: ${color || "#000000"}`
											)}
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr>
							<td class="newsletterBottom35px">
							</td>
						</tr>
					</table>
				</td>
			</tr>