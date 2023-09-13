import React, { useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import "./assets/css/custom.css";
import "./assets/css/main.css";
import moment from "moment/moment";
import $ from "jquery";
import "bootstrap-daterangepicker/daterangepicker.css"; // CSS for daterangepicker
import "bootstrap-daterangepicker"; // JavaScript for daterangepicker
import "eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css"; // CSS for datetimepicker
import "eonasdan-bootstrap-datetimepicker"; // JavaScript for datetimepicker

let SimpleForm = (props) => {
  const { handleSubmit } = props;

  useEffect(() => {
    $(function () {
      var start = moment().subtract(29, "days");
      var end = moment();
      var showdate =
        start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY");
      function cb(start, end) {
        //                    $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        $(".reportrange-datepicker").attr("placeholder", showdate);
      }

      $(".reportrange-datepicker").daterangepicker(
        {
          startDate: start,
          endDate: end,
          ranges: {
            Today: [moment(), moment()],
            Yesterday: [
              moment().subtract(1, "days"),
              moment().subtract(1, "days"),
            ],
            "Last 7 Days": [moment().subtract(6, "days"), moment()],
            "Last 30 Days": [moment().subtract(29, "days"), moment()],
            "This Month": [moment().startOf("month"), moment().endOf("month")],
            "Last Month": [
              moment().subtract(1, "month").startOf("month"),
              moment().subtract(1, "month").endOf("month"),
            ],
          },
        },
        cb
      );

      cb(start, end);
    });

    $(function () {
      $("#datetimepicker2").datetimepicker({
        locale: "ru",
      });
    });

    $(document).ready(function () {
      //Product Description
      $("#otherInfo").change(function () {
        if (this.checked) {
          $(".other-info").css("display", "block");
        } else {
          $(".other-info").css("display", "none");
        }
      });
      $("#productDescription").change(function () {
        if (this.checked) {
          $(".product-description").css("display", "block");
        } else {
          $(".product-description").css("display", "none");
        }
      });
      //Custom Redirect
      $("#customRedirect").change(function () {
        if (this.checked) {
          $(".custom-redirect").css("display", "block");
        } else {
          $(".custom-redirect").css("display", "none");
        }
      });

      //    Otional Information

      $("#setupFeePlan").change(function () {
        if (this.checked) {
          $(".setup-fee").css("display", "flex");
        } else {
          $(".setup-fee").css("display", "none");
        }
      });

      $("#freeTrialPlan").change(function () {
        if (this.checked) {
          $(".free-trial").css("display", "flex");
        } else {
          $(".free-trial").css("display", "none");
        }
      });
      $("#planDescription").change(function () {
        if (this.checked) {
          $(".plan-description").css("display", "block");
        } else {
          $(".plan-description").css("display", "none");
        }
      });

      //                $("#paymentGateway").change(function () {
      //                    if (this.checked) {
      //                        $(".payment-gateway").css('display', 'block');
      //                    } else {
      //                        $(".payment-gateway").css('display', 'none');
      //                    }
      //                });
      $("#paymentFailedSettings").change(function () {
        if (this.checked) {
          $(".payment-failed-settings").css("display", "block");
        } else {
          $(".payment-failed-settings").css("display", "none");
        }
      });
      $("#planStatus").change(function () {
        if (this.checked) {
          $(".plan-status").css("display", "block");
        } else {
          $(".plan-status").css("display", "none");
        }
      });
      $("#paymentTerm").change(function () {
        if (this.checked) {
          $(".payment-term").css("display", "block");
        } else {
          $(".payment-term").css("display", "none");
        }
      });
      $("#customRedirectUrl").change(function () {
        if (this.checked) {
          $(".custom-redirect").css("display", "block");
        } else {
          $(".custom-redirect").css("display", "none");
        }
      });
      $("#planMetadata").change(function () {
        if (this.checked) {
          $(".plan-metadata").css("display", "block");
        } else {
          $(".plan-metadata").css("display", "none");
        }
      });

      //Billing Cycle Settings

      $("#oneTime").on("click", function () {
        $(".recurring-billing").hide();
        $(".one-time-billing").show();
      });
      $("#recurring").on("click", function () {
        $(".recurring-billing").show();
        $(".one-time-billing").show();
      });

      //                $("select#billingCycle").change(function () {
      //                    $(this).find("option:selected").each(function () {
      //                        var optionValue = $(this).attr("value");
      //                        if (optionValue) {
      //                            $(".select-cycle").not("." + optionValue).hide();
      //                            $("." + optionValue).show();
      //                        } else {
      //                            $(".select-cycle").hide();
      //                        }
      //                    });
      //                }).change();
      //Billing Cycle Settings
      $("select#pricingModel")
        .change(function () {
          $(this)
            .find("option:selected")
            .each(function () {
              var optionValue = $(this).attr("value");
              if (optionValue) {
                $(".select-pricingmodel")
                  .not("." + optionValue)
                  .hide();
                $("." + optionValue).show();
              } else {
                $(".select-pricingmodel").hide();
              }
            });
        })
        .change();
      $("select#timeDuration")
        .change(function () {
          $(this)
            .find("option:selected")
            .each(function () {
              var optionValue = $(this).attr("value");
              if (optionValue) {
                $(".time-duration")
                  .not("." + optionValue)
                  .hide();
                $("." + optionValue).show();
              } else {
                $(".time-duration").hide();
              }
            });
        })
        .change();
      //Billing Cycle Settings
      //        $("#sellingPrice").change(function () {
      //            $(this).find("option:selected").each(function () {
      //                var optionValue = $(this).attr("value");
      //                if (optionValue) {
      //                    $(".selling-price").not("." + optionValue).hide();
      //                    $("." + optionValue).show();
      //                } else {
      //                    $(".selling-price").hide();
      //                }
      //            });
      //        }).change();
      //        //Billing Cycle Settings
      //        $("#maxPrice").change(function () {
      //            $(this).find("option:selected").each(function () {
      //                var optionValue = $(this).attr("value");
      //                if (optionValue) {
      //                    $(".product-max-price").not("." + optionValue).hide();
      //                    $("." + optionValue).show();
      //                } else {
      //                    $(".product-max-price").hide();
      //                }
      //            });
      //        }).change();

      //Setup Fee Settings
      $("select#setupFee")
        .change(function () {
          $(this)
            .find("option:selected")
            .each(function () {
              var optionValue = $(this).attr("value");
              if (optionValue) {
                $(".setupfee")
                  .not("." + optionValue)
                  .hide();
                $("." + optionValue).show();
              } else {
                $(".setupfee").hide();
              }
            });
        })
        .change();

      //Gateways
      $("select#paymentGateway")
        .change(function () {
          $(this)
            .find("option:selected")
            .each(function () {
              var optionValue = $(this).attr("value");
              if (optionValue) {
                $(".payment-gateway")
                  .not("." + optionValue)
                  .hide();
                $("." + optionValue).show();
              } else {
                $(".payment-gateway").hide();
              }
            });
        })
        .change();
      //Gateways1
      $("select#paymentGateway1")
        .change(function () {
          $(this)
            .find("option:selected")
            .each(function () {
              var optionValue = $(this).attr("value");
              if (optionValue) {
                $(".payment-gateway1")
                  .not("." + optionValue)
                  .hide();
                $("." + optionValue).show();
              } else {
                $(".payment-gateway1").hide();
              }
            });
        })
        .change();
    });

    //            $('.multi-field').children(':first-child').remove();

    $(".volume .multi-fields-wrapper").each(function () {
      var $wrapper = $(".multi-fields", this);
      $(".add-field", $(this)).click(function (e) {
        $(".multi-field:first-child", $wrapper)
          .clone(true)
          .appendTo($wrapper)
          .find("input")
          .val("")
          .focus();
      });
      $(".multi-field .remove-field", $wrapper).click(function () {
        if ($(".multi-field", $wrapper).length > 1)
          $(this).parent(".multi-field").remove();
      });
    });
    $(".tiered .multi-fields-wrapper").each(function () {
      var $wrapper = $(".multi-fields", this);
      $(".add-field", $(this)).click(function (e) {
        $(".multi-field:first-child", $wrapper)
          .clone(true)
          .appendTo($wrapper)
          .find("input")
          .val("")
          .focus();
      });
      $(".multi-field .remove-field", $wrapper).click(function () {
        if ($(".multi-field", $wrapper).length > 1)
          $(this).parent(".multi-field").remove();
      });
    });
    $(".stairstep .multi-fields-wrapper").each(function () {
      var $wrapper = $(".multi-fields", this);
      $(".add-field", $(this)).click(function (e) {
        $(".multi-field:first-child", $wrapper)
          .clone(true)
          .appendTo($wrapper)
          .find("input")
          .val("")
          .focus();
      });
      $(".multi-field .remove-field", $wrapper).click(function () {
        if ($(".multi-field", $wrapper).length > 1)
          $(this).parent(".multi-field").remove();
      });
    });

    // input.oninput = function () {
    //   result.innerHTML = input.value;
    // };
  }, []);

  return (
    <form className="card" onSubmit={handleSubmit}>
      <div className="card-header p-t-15 p-b-15">
        <h3>Add Plan</h3>
        <p className="text-secondary font-14 m-0">
          You will sell the products through these plans with different billing
          frequencies, trial, and setup fees.
        </p>
      </div>
      <div className="card-body">
        <div className="form-row font-15">
          <div className="form-group col-md-12">
            <label>Plan Name*</label>
            <Field
              component="input"
              type="text"
              className="form-control"
              name="planname"
              placeholder="Plan name"
            />
            <small className="form-text text-muted">
              Enter the plan name. Please note that this will be displayed to
              customers on the checkout page.
            </small>
          </div>
          <div className="form-group col-md-12">
            <label>Plan Code*</label>
            <Field
              component="input"
              type="text"
              className="form-control"
              name="plancode"
              placeholder="Plan code"
            />
            <small className="form-text text-muted">
              This unique plan code will appear at the end of the checkout page
              link and help you identify this plan.
            </small>
          </div>

          <div className="form-group col-md-12 m-t-15">
            <div className="font-demi border-bottom-primary2 p-b-10 m-b-15">
              Billing Interval
            </div>

            <p className="form-text text-muted m-t-0 font-12 m-b-10">
              Choose the billing cycle of the plan as One-Time or Recurring to
              collect the payment from your customer.
            </p>
            <div className="custom-control custom-radio m-b-10">
              <Field
                component="input"
                type="radio"
                className="custom-control-input"
                id="oneTime"
                name="billing_interval"
              />
              <label className="custom-control-label" htmlFor="oneTime">
                One Time
              </label>
            </div>
            <div className="custom-control custom-radio">
              <Field
                component="input"
                type="radio"
                className="custom-control-input"
                id="recurring"
                name="billing_interval"
              />
              <label className="custom-control-label" htmlFor="recurring">
                Recurring
              </label>
            </div>
          </div>

          <div className="recurring-billing select-cycle w-100">
            <div className="form-row p-l-0 p-r-0">
              <div className="form-group col-md-8">
                <label>Bill Every*</label>
                <div className="form-row">
                  <div className="form-group col-md-6 m-b-0">
                    <Field
                      component="input"
                      type="number"
                      className="form-control"
                      name="billinginterval"
                      placeholder="2"
                    />
                  </div>
                  <div className="form-group col-md-6 m-b-0 billing-periods">
                    <Field
                      component="select"
                      name="billeveryperiod"
                      className="custom-select"
                    >
                      <option value="day">Day</option>
                      <option value="week">Week</option>
                      <option value="month">Month</option>
                      <option value="year">Year</option>
                    </Field>
                  </div>
                  <small className="form-text text-muted p-l-10">
                    Choose the billing frequency type. Example: To bill every 2
                    weeks up to 3 billing cycles, add 2 in the bill every
                    option, choose weeks from the dropdown and add 3 in the no.
                    of billing cycles.
                  </small>
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>No. of Billing Cycles</label>
                <Field
                  component="input"
                  type="text"
                  className="form-control"
                  name="billeveryintervalcycle"
                  placeholder="Forever"
                />
                <small className="form-text text-muted">
                  {" "}
                  Leave it blank to use the forever billing cycle type.
                </small>
              </div>
            </div>
          </div>

          <div className="one-time-billing w-100">
            <div className="form-group col-md-12 p-l-10 p-r-10">
              <div className="font-demi border-bottom-primary2 p-b-10 m-b-25 m-t-20">
                Pricing
              </div>
              <Field
                component="select"
                name="flatfeepricingtype"
                className="custom-select"
                id="pricingModel"
              >
                <option value="flat-fee">Flat Fee</option>
                <option value="per-unit">Per Unit</option>
                <option value="volume">Volume</option>
                <option value="tiered">Tiered</option>
                <option value="stairstep">Stairstep</option>
                <option value="donation">Donation / Pay Your Own Price</option>
                <option value="variable-pricing">
                  Variable Pricing (Dimesale/Timesale)
                </option>
              </Field>
              <small className="pricing-model-text select-pricingmodel form-text text-muted">
                Choose the pricing model that defines how the charges for the
                subscription are calculated.
              </small>
              <small className="flat-fee select-pricingmodel form-text text-muted">
                This is for plans that have a fixed recurring charge. There is
                no quantity associated with such plans.
              </small>
              <small className="per-unit select-pricingmodel form-text text-muted">
                This is for plans that have a plan amount that changes according
                to the quantity. For instance: $19 is the plan amount for a
                single quantity, then for 5 quantities, it would be $19*5 = $95.
              </small>
              <small className="volume select-pricingmodel form-text text-muted">
                {" "}
                Here, the price is quantity-based. However, the per-unit price
                is dependent on the range. So under this model, you would define
                the quantity ranges and the per-unit price for each. Example:
                From 1 to 19 units, the price would be $50 and from 20 or above
                the price would be $20.
              </small>
              <small className="tiered select-pricingmodel form-text text-muted">
                The per-unit prices are assigned to quantity-based ranges
                (tiers). When calculating the total price, quantities are
                purchased from successive tiers, starting from the lowest.
                Example: From 1 to 10 units, the price would be $50 and from 11
                & above the price would be $20. Now, if the customer purchases
                11 units then the total payable amount would be $520. (For 10
                units = 10*$50 and for 11th unit = 1*$20)
              </small>
              <small className="stairstep select-pricingmodel form-text text-muted">
                Stairstep pricing also defines quantity tiers against which
                prices are defined, but for each tier, a flat price is assigned
                instead of a per-unit price. Example: From 1 to 10 units, the
                price would be $50 and from 11 & above the price would be $20.
                Now, if the customer purchases 11 units then the total payable
                amount would be $20. (For 11 unit, there is a fixed price of
                $20)
              </small>
              <small className="donation select-pricingmodel form-text text-muted">
                Here, the customer has the option to add the amount as per their
                choice. You can mention the minimum amount to be paid by the
                customer. Example: If the minimum amount would be $10, then your
                customer must pay at least $10 for your product, but could
                choose to pay more.
              </small>
              <small className="variable-pricing select-pricingmodel form-text text-muted">
                In the variable pricing plan, the plan amount changes according
                to the number of sales or hours. Example: First 10 Sales are
                $50, then next 10 are $60, then next 10 are $70 etc.
              </small>
            </div>
            <div className="flat-fee select-pricingmodel w-100">
              <div className="form-group col-md-12 p-l-10 p-r-10 m-t-20">
                <label>Price*</label>
                <div className="input-group">
                  <Field
                    component="input"
                    type="number"
                    className="form-control border-right-0"
                    name="flatFee_price"
                    placeholder="79"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text rounded-right">$</div>
                  </div>
                </div>
                <small className="p-l-0 form-text text-muted">
                  The selling price of this Product (or the start price if this
                  is a dimesale/timesale).
                </small>
              </div>
            </div>
            <div className="per-unit select-pricingmodel w-100">
              <div className="form-group col-md-12 p-l-10 p-r-10">
                <label>Price*</label>
                <div className="input-group">
                  <Field
                    component="input"
                    type="number"
                    className="form-control border-right-0"
                    name="perunitflatfee"
                    placeholder="50"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text rounded-right">$</div>
                  </div>
                </div>
                <small className="p-l-0 form-text text-muted">
                  The selling price of this Product (or the start price if this
                  is a dimesale/timesale).
                </small>
              </div>
            </div>
            <div className="volume select-pricingmodel w-100 m-b-15">
              <div className="multi-fields-wrapper">
                <div className="multi-fields">
                  <div className="form-row p-l-5 p-r-5 multi-field">
                    <div className="form-group col-md-2">
                      <label></label>
                      <div className="m-t-10">Units 1 to</div>
                    </div>
                    <div className="form-group col-md-4">
                      <label></label>
                      <Field
                        component="input"
                        type="number"
                        className="form-control m-t-5"
                        placeholder="& Above"
                        name="unitcount"
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label>Price Per Unit</label>
                      <div className="input-group">
                        <Field
                          component="input"
                          type="number"
                          className="form-control border-right-0"
                          placeholder="20"
                          name="priceperunit"
                        />
                        <div className="input-group-append">
                          <div className="input-group-text rounded-right">
                            $
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-md-2 align-self-center m-b-0 m-t-10 text-right remove-field">
                      <label></label>
                      <button className="btn btn-sm btn-outline-secondary font-15">
                        <i className="fas fa-times-circle font-14 m-r-5"></i>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <div className="form-row p-l-5 p-r-5">
                  <button
                    type="button"
                    className="add-field btn btn-sm btn-outline-primary font-15 d-none d-sm-block d-lg-none d-xl-block float-right m-l-10"
                  >
                    <i className="fas fa-plus-circle rounded m-r-5"></i>
                    Add Unit
                  </button>
                </div>
              </div>
            </div>
            <div className="tiered select-pricingmodel w-100 m-b-15">
              <div className="multi-fields-wrapper">
                <div className="multi-fields">
                  <div className="form-row p-l-10 p-r-10 multi-field">
                    <div className="form-group col-md-2">
                      <label></label>
                      <div className="m-t-10">Units 1 to</div>
                    </div>
                    <div className="form-group col-md-4">
                      <label></label>
                      <Field
                        component="input"
                        type="number"
                        className="form-control m-t-5"
                        placeholder="& Above"
                        name="unitcount"
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label>Price Per Unit</label>
                      <div className="input-group">
                        <Field
                          component="input"
                          type="number"
                          className="form-control border-right-0"
                          placeholder="20"
                          name="price_per_unit"
                        />
                        <div className="input-group-append">
                          <div className="input-group-text rounded-right">
                            $
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-md-2 align-self-center m-b-0 m-t-10 text-right remove-field">
                      <label></label>
                      <button className="btn btn-sm btn-outline-secondary font-15">
                        <i className="fas fa-times-circle font-14 m-r-5"></i>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <div className="form-row p-l-10 p-r-10">
                  <button
                    type="button"
                    className="add-field btn btn-sm btn-outline-primary font-15 d-none d-sm-block d-lg-none d-xl-block float-right m-l-10"
                  >
                    <i className="fas fa-plus-circle rounded m-r-5"></i>
                    Add Unit
                  </button>
                </div>
              </div>
            </div>
            <div className="stairstep select-pricingmodel w-100 m-b-15">
              <div className="multi-fields-wrapper">
                <div className="multi-fields">
                  <div className="form-row p-l-10 p-r-10 multi-field">
                    <div className="form-group col-md-2">
                      <label></label>
                      <div className="m-t-10">Units 1 to</div>
                    </div>
                    <div className="form-group col-md-4">
                      <label></label>
                      <Field
                        component="input"
                        type="number"
                        className="form-control m-t-5"
                        placeholder="& Above"
                        name="unitcount"
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label>Price Per Unit</label>
                      <div className="input-group">
                        <Field
                          component="input"
                          type="number"
                          className="form-control border-right-0"
                          placeholder="20"
                          name="priceperunit"
                        />
                        <div className="input-group-append">
                          <div className="input-group-text rounded-right">
                            $
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-md-2 align-self-center m-b-0 m-t-10 text-right remove-field">
                      <label></label>
                      <button className="btn btn-sm btn-outline-secondary font-15">
                        <i className="fas fa-times-circle font-14 m-r-5"></i>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <div className="form-row p-l-10 p-r-10">
                  <button
                    type="button"
                    className="add-field btn btn-sm btn-outline-primary font-15 d-none d-sm-block d-lg-none d-xl-block float-right m-l-10"
                  >
                    <i className="fas fa-plus-circle rounded m-r-5"></i>
                    Add Unit
                  </button>
                </div>
              </div>
            </div>
            <div className="donation select-pricingmodel w-100">
              <div className="form-group col-md-12 p-l-10 p-r-10">
                <label>Minimum Price</label>
                <div className="input-group">
                  <Field
                    component="input"
                    type="number"
                    className="form-control border-right-0"
                    placeholder="50"
                    name="minimumprice"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text rounded-right">$</div>
                  </div>
                </div>
                <small className="p-l-0 form-text text-muted">
                  You can mention the minimum amount to be paid by the customer.
                </small>
              </div>
            </div>
            <div className="variable-pricing select-pricingmodel w-100">
              <div className="form-group col-md-12 p-l-10 p-r-10 m-t-20">
                <label>Price*</label>
                <div className="input-group">
                  <Field
                    component="input"
                    type="number"
                    className="form-control border-right-0"
                    placeholder="79"
                    name="price"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text rounded-right">$</div>
                  </div>
                </div>
                <small className="p-l-0 form-text text-muted">
                  The selling price of this Product (or the start price if this
                  is a dimesale/timesale).
                </small>
              </div>
              <div className="form-group col-md-12 p-l-10 p-r-10">
                <label>Increase Price by</label>
                <div className="input-group">
                  <Field
                    component="input"
                    type="number"
                    className="form-control border-right-0"
                    placeholder="Increase price"
                    name="increasepriceby"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text rounded-right">$</div>
                  </div>
                </div>
                <small className="p-l-0 form-text text-muted">
                  The amount to increase price by each time it goes up (values
                  less than 1 are okay ie 0.15 = 15 cents)
                </small>
              </div>
              <div className="form-group col-md-12 p-l-10 p-r-10">
                <label>Every</label>
                <div className="input-group">
                  <Field
                    component="input"
                    type="number"
                    className="form-control"
                    placeholder="Every"
                    name="every"
                  />
                  <div className="input-group-append">
                    <Field
                      component="select"
                      className="custom-select"
                      id="timeDuration"
                      name="everyselect"
                    >
                      <option value="sales">Sales</option>
                      <option value="hours">Hours</option>
                    </Field>
                  </div>
                </div>
                <small className="p-l-0 form-text text-muted">
                  How often to increase the price.
                </small>
              </div>
              <div className="form-group col-md-12 p-l-10 p-r-10 time-duration hours">
                <label>Timesale Start</label>
                <div className="input-group">
                  <Field
                    component="input"
                    className="form-control"
                    type="datetime-local"
                    value="2018-06-12T19:30"
                    id="example-date-input"
                    name="timesalestart"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text rounded-right">
                      <i className="far fa-calendar-alt"></i>
                    </div>
                  </div>
                </div>
                <small className="p-l-0 form-text text-muted">
                  This is the date and time that the timesale will start
                </small>
              </div>
              <div className="form-group col-md-12 p-l-10 p-r-10 time-duration sales">
                <label>Max Price</label>
                <div className="input-group">
                  <Field
                    component="input"
                    type="number"
                    className="form-control border-right-0"
                    placeholder="Max price"
                    name="maxprice"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text rounded-right">$</div>
                  </div>
                </div>
                <small className="p-l-0 form-text text-muted">
                  The maximum price your product will sell for (leave blank for
                  no max)
                </small>
              </div>
            </div>
          </div>
          <div className="form-group col-md-12 m-t-20">
            <div className="font-demi border-bottom-primary2 p-b-10 m-b-15">
              Add Setup Fee
            </div>
            <div className="custom-control custom-checkbox m-t-5 m-b-30">
              <Field
                component="input"
                type="checkbox"
                className="custom-control-input"
                id="setupFeePlan"
                name="setupfee"
              />
              <label className="custom-control-label" htmlFor="setupFeePlan">
                Setup Fee
              </label>
            </div>
            <div className="row setup-fee">
              <div className="form-group col-md-6">
                <Field
                  component="input"
                  type="number"
                  className="form-control"
                  placeholder="2"
                  name="addsetupfee"
                />
                <small className="form-text text-muted">
                  Enter the setup fee. It is a one-time fee that will be charged
                  only once at the starting of the billing cycle.
                </small>
              </div>
              <div className="form-group col-md-6">
                <Field
                  component="select"
                  name="addsetuptype"
                  className="custom-select"
                  id="setupFee"
                >
                  <option value="fixed">Fixed</option>
                  <option value="quantity-wise">Quantity-wise</option>
                </Field>
                <small className="fixed setupfee form-text text-muted">
                  This type of setup fee is fixed. This is not dependent on the
                  quantity.
                </small>
                <small className="quantity-wise setupfee form-text text-muted">
                  This type of setup fee is changed according to the plan
                  quantity.
                </small>
              </div>
            </div>
            <div className="font-demi border-bottom-primary2 p-b-10 m-b-15">
              Add Trial Period
            </div>

            <div className="custom-control custom-checkbox m-t-5 m-b-10">
              <Field
                component="input"
                type="checkbox"
                className="custom-control-input"
                id="freeTrialPlan"
                name="trialplan"
              />
              <label className="custom-control-label" htmlFor="freeTrialPlan">
                Trial
              </label>
            </div>
            <div className="row free-trial">
              <div className="form-group col-md-6 m-b-0">
                <Field
                  component="input"
                  type="number"
                  className="form-control"
                  placeholder="2"
                  name="addtrialfee"
                />
              </div>
              <div className="form-group col-md-6 m-b-0">
                <Field
                  component="select"
                  name="addtrialfeeperiod"
                  className="custom-select"
                >
                  <option value="day">Day</option>
                  <option value="month">Month</option>
                </Field>
              </div>
              <small className="form-text text-muted p-l-15">
                Enter the number of days or months for the product trial period.
              </small>
              <div className="form-group col-md-12 m-t-20">
                <div className="input-group">
                  <Field
                    component="input"
                    type="number"
                    className="form-control border-right-0"
                    placeholder="20"
                    name="trialperiodvalid"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text rounded-right">$</div>
                  </div>
                </div>
                <small className="form-text text-muted m-t-5">
                  Keep the field blank to set a Free Trial where the charge will
                  happen at the Trial Ending Date. Either enter some amount to
                  create a Paid Trial that will be charged on the Trial start
                  date & rest Subscription amount will be deducted after the
                  completion of the Trial Period
                </small>
              </div>
            </div>
            <div className="flat-fee select-pricingmodel w-100">
              <div className="form-group col-md-12 p-l-0 p-r-0 m-b-10 m-t-20">
                <div className="notes m-b-10 m-t-10">
                  <div className="m-b-0 text-secondary d-flex">
                    <span className="align-self-center p-r-10">
                      If a customer purchases{" "}
                    </span>
                    <Field
                      component="input"
                      id="input"
                      type="number"
                      className="form-control w-10 h-25"
                      placeholder=""
                      name="customer_purchased_units"
                    />
                    <span className="align-self-center p-l-10">
                      {" "}
                      units, the total amount payable will be $
                      <span id="result">50.00</span>.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="volume tiered stairstep select-pricingmodel w-100">
              <div className="form-group col-md-12 p-l-0 p-r-0 m-b-10 m-t-20">
                <div className="notes m-b-10 m-t-10">
                  <p className="m-b-0 text-secondary">
                    Your customer will be charges $50.00 per unit every month
                    for upto 10 units and for 11 and above unit they will be
                    charged $30 per unit every month until they cancel.
                  </p>
                </div>
              </div>
            </div>
            <div className="donation select-pricingmodel w-100">
              <div className="form-group col-md-12 p-l-0 p-r-0 m-b-10 m-t-20">
                <div className="notes m-b-10 m-t-10">
                  <p className="m-b-0 text-secondary">
                    Your customer must pay at least $50.00 for your product, but
                    could choose to pay more.
                  </p>
                </div>
              </div>
            </div>
            <div className="per-unit select-pricingmodel w-100">
              <div className="form-group col-md-12 p-l-0 p-r-0 m-b-10 m-t-20">
                <div className="notes m-b-10 m-t-10">
                  <p className="m-b-0 text-secondary">
                    Your customer will be charges $10.0 per unit for one-time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="form-group col-md-12 m-t-5">
            <div className="font-demi border-bottom-primary2 p-b-10 m-b-25">
              Add Payment Gateway
            </div>
            <Field
              component="select"
              name="paymentgatewaytype"
              className="custom-select"
              id="paymentGateway"
            >
              <option value="all-gateways">All Gateways</option>
              <option value="selected-gateways">Selected Gateways</option>
            </Field>
            <small className="form-text text-muted">
              Select a specific/all Payment Gateways to collect payments for
              this plan. Before going LIVE, Please disable the test gateway from
              the payment gateway integration to avoid the test payments during
              the LIVE mode.
            </small>
          </div>
          <div className="form-group col-md-12 m-b-0">
            <div className="selected-gateways payment-gateway w-100 m-b-15">
              <Field
                component="select"
                className="select2-multiple form-control font-15"
                name="gatewaystype"
              >
                <option value="stripe">Stripe</option>
                <option value="paypal">PayPal</option>
                <option value="razorpay">Razorpay</option>
                <option value="authorize">Authorize</option>
                <option value="custom">Custom</option>
              </Field>
            </div>
          </div>
          <div className="form-group col-md-12 m-t-10">
            <div className="custom-control custom-checkbox">
              <Field
                component="input"
                type="checkbox"
                className="custom-control-input"
                id="otherInfo"
                name="otherInfo"
              />
              <label
                className="custom-control-label font-demi p-b-10"
                htmlFor="otherInfo"
              >
                Subscription Status, Description, Redirect URL, Metadata,
                Payment Failed Settings or Payment Term
              </label>
            </div>

            <div className="other-info  border-top-primary2">
              <div className="custom-control custom-checkbox m-t-15 m-b-10">
                <Field
                  component="input"
                  type="checkbox"
                  className="custom-control-input"
                  id="paymentFailedSettings"
                  name="paymentFailedSettings"
                />
                <label
                  className="custom-control-label"
                  htmlFor="paymentFailedSettings"
                >
                  Payment Failed Settings
                </label>
              </div>
              <div className="row payment-failed-settings m-t-10">
                <div className="form-group col-md-12 m-t-5">
                  <Field
                    component="select"
                    name="paymentfailedgateway"
                    className="custom-select"
                    id="paymentGateway1"
                  >
                    <option value="all-gateways1">All Gateways</option>
                    <option value="selected-gateways1">
                      Selected Gateways
                    </option>
                  </Field>
                  <small className="form-text text-muted">
                    You can show the other payment gateways in case of failed
                    payment. Example: If the customer's payment is failed via
                    Stripe gateway, you can show other integrated payment
                    gateways to them for processing the payment.
                  </small>
                </div>
                <div className="form-group col-md-12 m-b-0">
                  <div className="selected-gateways1 payment-gateway1 w-100 m-b-15">
                    <Field
                      component="select"
                      className="select2-multiple form-control font-15"
                      name="gateways[]"
                    >
                      <option value="stripe">Stripe</option>
                      <option value="paypal">PayPal</option>
                      <option value="razorpay">Razorpay</option>
                      <option value="authorize">Authorize</option>
                      <option value="custom">Custom</option>
                    </Field>
                  </div>
                </div>
              </div>

              <div className="custom-control custom-checkbox m-t-5 m-b-10">
                <Field
                  component="input"
                  type="checkbox"
                  className="custom-control-input"
                  id="planQuantity"
                  name="planquantity"
                />
                <label className="custom-control-label" htmlFor="planQuantity">
                  Show Plan Quantity
                </label>
                <small className="form-text text-muted m-l-5">
                  Check if you want to show the plan quantity on the checkout
                  page.
                </small>
              </div>

              <div className="custom-control custom-checkbox m-t-5 m-b-10">
                <Field
                  component="input"
                  type="checkbox"
                  className="custom-control-input"
                  id="customRedirectUrl"
                  name="customRedirectUrl"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customRedirectUrl"
                >
                  Redirect URL After Successful Payment
                </label>
              </div>
              <div className="row custom-redirect m-t-10">
                <div className="form-group col-md-12">
                  <Field
                    component="input"
                    type="text"
                    className="form-control h-auto"
                    placeholder="Redirect URL"
                    name="redirecturlafterpayment"
                  />
                  <small className="form-text text-muted">
                    Enter a custom link to redirect your customers after a
                    successfull purchase. Or, leave the field blank to use the
                    default Thank You page. Link Formate:
                    https://www.example.com.
                  </small>
                </div>
              </div>

              <div className="custom-control custom-checkbox m-t-15 m-b-10">
                <Field
                  component="input"
                  type="checkbox"
                  className="custom-control-input"
                  id="planStatus"
                  name="plan_Status"
                />
                <label className="custom-control-label" htmlFor="planStatus">
                  Subscription Status After Term Ends
                </label>
              </div>
              <div className="row plan-status m-t-10">
                <div className="form-group col-md-12">
                  <Field
                    component="select"
                    name="planStatus"
                    className="custom-select"
                  >
                    <option value="live">Live</option>
                    <option value="expire">Expire</option>
                  </Field>
                  <small className="form-text text-muted">
                    Select the plan status as Live or Expire once the billing
                    cycle ends.
                  </small>
                </div>
              </div>

              <div className="custom-control custom-checkbox m-t-5 m-b-10">
                <Field
                  component="input"
                  type="checkbox"
                  className="custom-control-input"
                  id="paymentTerm"
                  name="paymentTerm"
                />
                <label className="custom-control-label" htmlFor="paymentTerm">
                  Payment Term
                </label>
              </div>
              <div className="row payment-term m-t-10">
                <div className="form-group col-md-12">
                  <Field
                    component="select"
                    name="paymentterm"
                    className="custom-select"
                  >
                    <option value="net0">Net 0</option>
                    <option value="net15">Net 15</option>
                    <option value="net30">Net 30</option>
                    <option value="net45">Net 45</option>
                    <option value="net60">Net 60</option>
                    <option value="month">Due end of the month</option>
                    <option value="nextmonth">Due end of the next month</option>
                  </Field>
                  <small className="form-text text-muted">
                    Payment term is like how long your customer can pay. For
                    example, if you select net 15 that means your customer has
                    15 more days to make the payment from the subscription
                    billing date. Similarly for Net 30, Net 45, Net 60.
                  </small>
                </div>
              </div>

              <div className="custom-control custom-checkbox m-t-5 m-b-10">
                <Field
                  component="input"
                  type="checkbox"
                  className="custom-control-input"
                  id="planDescription"
                  name="plan_description"
                />
                <label
                  className="custom-control-label"
                  htmlFor="planDescription"
                >
                  Plan Description
                </label>
              </div>
              <div className="row plan-description m-t-10">
                <div className="form-group col-md-12 m-b-0">
                  <Field
                    className="form-control text-editor-builder"
                    rows="3"
                    name="plandescription"
                    component="textarea"
                  ></Field>
                  <small className="form-text text-muted">
                    Enter a short description about the plan. This will be shown
                    on the checkout page.
                  </small>
                </div>
              </div>

              <div className="custom-control custom-checkbox m-t-5 m-b-10">
                <Field
                  component="input"
                  type="checkbox"
                  className="custom-control-input"
                  id="planMetadata"
                  name="plan_metadata"
                />
                <label className="custom-control-label" htmlFor="planMetadata">
                  Plan Metadata
                </label>
              </div>
              <div className="row plan-metadata m-t-10">
                <div className="form-group col-md-12">
                  <Field
                    component="textarea"
                    className="form-control"
                    id="inputTextarea"
                    rows="2"
                    name="planmetadata"
                  ></Field>
                  <small className="form-text text-muted">
                    These metadata fields help you to include some additional
                    data in the plan. Example: You can add the details about
                    assigned plan limits of your product like. This will work as
                    a hidden custom field.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary m-r-10 m-l-5 font-15"
          id="saveBtn"
        >
          Save
        </button>
        <button type="submit" className="btn border text-secondary font-15">
          Cancel
        </button>
      </div>
    </form>
  );
};

SimpleForm = reduxForm({
  form: "simple",
})(SimpleForm);

export default SimpleForm;
