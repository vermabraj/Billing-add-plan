import React from "react";
import SimpleForm from "../SimpleForm";
import axios from "axios";

const AddPlan = () => {
  const onSubmit = async (values) => {
    console.log("values", values);

    

    const planData = {
      planname: values.planname,
      plancode: values.plancode,
      billinginterval: values.billinginterval,
      billeveryperiod: values.billeveryperiod,
      paymentterm: values.select_payment_term,
      billeveryintervalcycle: values.billeveryintervalcycle,
      perunitflatfee: values.perunitflatfee,
      flatfeepricingtype:values.flatfeepricingtype,
      setupfee: values.setupfee,
      addsetupfee: values.addsetupfee,
      addsetuptype: values.addsetuptype,
      trialplan: values.trialplan,
      trialperiodvalid: values.trialperiodvalid,
      addtrialfee: values.addtrialfee,
      paymentgatewaytype: values.paymentgatewaytype,
      planStatus: values.planStatus,
      plandescription: values.plandescription,
      planmetadata: values.planmetadata,
      redirecturlafterpayment: values.redirecturlafterpayment,
      paymentfailedsettings: values.paymentfailedsettings,
      planquantity: values.planquantity,
    };
    await axios
      .post("http://localhost:1337/products", planData)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
    console.log(planData);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="fg-main-sidebar-wrap col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 p-l-0 p-r-0 d-md-block d-none">
          <div id="fg-sidebar" className="psb-sidebar bg-bodycolor h-100">
            <ul className="fg-sidebar-menu p-0">
              <li className="sidebar-list-item text-center">
                <a
                  href="/boilerplate-templates/subscription-billing-affiliate/dashboard.html"
                  className="fg-list-item p-t-15 p-b-15 d-block"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Dashboard"
                >
                  <i className="fas fa-tachometer-alt text-white font-20"></i>
                  <span className="m-t-5 text-center d-block text-white font-12">
                    Dashboard
                  </span>
                </a>
              </li>
              <li className="sidebar-list-item text-center active">
                <a
                  href="/boilerplate-templates/subscription-billing-affiliate/products.html"
                  className="fg-list-item p-t-15 p-b-15 d-block"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Products"
                >
                  <i className="fab fa-product-hunt text-white font-20"></i>
                  <span className="m-t-5 text-center d-block text-white font-12">
                    Products
                  </span>
                </a>
              </li>
              <li className="sidebar-list-item text-center">
                <a
                  href="/boilerplate-templates/subscription-billing-affiliate/customers.html"
                  className="fg-list-item p-t-15 p-b-15 d-block"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Customers"
                >
                  <i className="fas fa-user text-white font-20"></i>
                  <span className="m-t-5 text-center d-block text-white font-12">
                    Customers
                  </span>
                </a>
              </li>
              <li className="sidebar-list-item text-center">
                <a
                  href="/boilerplate-templates/subscription-billing-affiliate/sales.html"
                  className="fg-list-item p-t-15 p-b-15 d-block"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Sales"
                >
                  <i className="fas fa-hand-holding-usd text-white font-20"></i>
                  <span className="m-t-5 text-center d-block text-white font-12">
                    Sales
                  </span>
                </a>
              </li>
              <li className="sidebar-list-item text-center">
                <a
                  href="/boilerplate-templates/subscription-billing-affiliate/subscription.html"
                  className="fg-list-item p-t-15 p-b-15 d-block"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Subscription"
                >
                  <i className="fab fa-stripe-s text-white font-20"></i>
                  <span className="m-t-5 text-center d-block text-white font-12">
                    Subscription
                  </span>
                </a>
              </li>
              <li className="sidebar-list-item text-center">
                <a
                  href="/boilerplate-templates/subscription-billing-affiliate/invoice.html"
                  className="fg-list-item p-t-15 p-b-15 d-block"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Invoice"
                >
                  <i className="fas fa-file-alt text-white font-20"></i>
                  <span className="m-t-5 text-center d-block text-white font-12">
                    Invoice
                  </span>
                </a>
              </li>

              <li className="sidebar-list-item text-center">
                <a
                  href="/boilerplate-templates/subscription-billing-affiliate/settings-profile-settings.html"
                  className="fg-list-item p-t-15 p-b-15 d-block"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Settings"
                >
                  <i className="fas fa-cog text-white font-20"></i>
                  <span className="m-t-5 text-center d-block text-white font-12">
                    Settings
                  </span>
                </a>
              </li>

              <li className="sidebar-list-item text-center">
                <a
                  href="/boilerplate-templates/subscription-billing-affiliate/affiliate.html"
                  className="fg-list-item p-t-15 p-b-15 d-block"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Affiliate"
                >
                  <i className="fas fa-podcast text-white font-20"></i>
                  <span className="m-t-5 text-center d-block text-white font-12">
                    Affiliate
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="fg-main-content-wrap col-xl-11 col-lg-11 col-md-11 col-sm-12 col-12 p-0">
          <div className="container-fluid bg-white shadow-sm">
            <div className="container">
              <div className="row page-titles p-t-35 p-b-15 m-b-40">
                <div className="col-md-8 col-sm-12 col-12 align-self-center pl-0 pl-xl-3">
                  <h1 className="text-bodycolor">Products</h1>
                  <p className="text-secondary font-14">
                    Each product can have multiple plan and you can create
                    onetime or recurring plans to sell your items.
                  </p>
                </div>
                <div className="col-md-4 col-sm-12 col-12 pr-0 pr-xl-3 pl-0 pl-xl-3">
                  <div className="d-flex justify-content-md-end justify-content-start">
                    <button
                      type="button"
                      className="add-plan btn btn-primary p-r-15 font-18 mb-3 mb-md-0"
                    >
                      <i className="fas fa-plus-circle rounded p-t-10 p-b-10 m-r-5"></i>
                      Add Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container min-vh-100">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-12 col-12 pl-0 pr-0 pl-sm-3 pr-sm-3">
                <div className="card">
                  <div className="card-header p-t-15 p-b-15">
                    <div className="row align-items-center">
                      <div className="col-md-6 col-sm-6 col-5 mb-2 mb-md-0">
                        <h3 className="text-bodycolor p-t-5 p-b-5 m-b-0">
                          Products
                        </h3>
                      </div>
                      <div className="col-md-6 col-sm-6 col-7 ">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-primary font-15 d-block d-sm-none d-lg-block d-xl-none float-right"
                          data-toggle="modal"
                          data-target="#addProduct"
                        >
                          <i
                            className="fas fa-plus-circle rounded"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Add Product"
                          ></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-primary font-15 d-none d-sm-block d-lg-none d-xl-block float-right"
                          data-toggle="modal"
                          data-target="#addProduct"
                        >
                          <i className="fas fa-plus-circle rounded m-r-5"></i>
                          Add Product
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-t-0 p-b-0">
                    <div className="table-responsive">
                      <table className="table table-hover text-nowrap m-b-0">
                        <thead>
                          <tr>
                            <th
                              colSpan="1"
                              className="font-medium text-bodycolor font-15 align-middle p-t-20 p-b-20"
                            >
                              12 Products
                            </th>
                            <th colSpan="1" className="p-t-15 p-b-15 m-w-10">
                              <div className="text-secondary d-flex justify-content-end">
                                <i
                                  className="fas fa-filter border font-12 rounded m-r-10 bg-white p-10"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Filter"
                                ></i>
                                <i
                                  className="fas fa-search border font-12 rounded bg-white p-10"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Search"
                                ></i>
                                <div className="dropdown d-inline">
                                  <i
                                    className="fas fa-ellipsis-v font-16 text-secondary m-l-5 p-2 p-r-0"
                                    data-toggle="dropdown"
                                  ></i>
                                  <div
                                    className="dropdown-menu dropdown-menu-right  font-medium font-14"
                                    aria-labelledby="dropdownMenuLink"
                                  >
                                    <a className="dropdown-item" href="#">
                                      Export
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-t-15 p-b-15">
                              <a className="text-bodycolor p-0" href="#">
                                Colorway Theme
                                <br />
                                <span className="font-12 text-secondary">
                                  {" "}
                                  5 Plans
                                </span>
                                <span className="font-12 text-secondary m-l-5">
                                  {" "}
                                  • 2 Coupons
                                </span>
                                <span className="font-12 text-secondary m-l-5">
                                  {" "}
                                  • 3 Addons
                                </span>
                              </a>
                            </td>
                            <td className="m-w-10">
                              <div className="dropdown d-none text-right">
                                <i
                                  className="fas fa-ellipsis-v text-secondary font-16"
                                  data-toggle="dropdown"
                                ></i>
                                <div
                                  className="dropdown-menu dropdown-menu-right font-14 border-0"
                                  aria-labelledby="dropdownMenuLink"
                                >
                                  <a
                                    className="dropdown-item p-t-5 p-b-5"
                                    href="#"
                                  >
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item p-t-5 p-b-5"
                                    href="#"
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-t-15 p-b-15">
                              <a className="text-bodycolor p-0" href="#">
                                Pabbly Subscription Billing
                                <br />
                                <span className="font-12 text-secondary">
                                  {" "}
                                  5 Plans
                                </span>
                                <span className="font-12 text-secondary m-l-5">
                                  {" "}
                                  • 2 Coupons
                                </span>
                                <span className="font-12 text-secondary m-l-5">
                                  {" "}
                                  • 3 Addons
                                </span>
                              </a>
                            </td>
                            <td className="m-w-10">
                              <div className="dropdown d-none text-right">
                                <i
                                  className="fas fa-ellipsis-v text-secondary font-16"
                                  data-toggle="dropdown"
                                ></i>
                                <div
                                  className="dropdown-menu dropdown-menu-right font-14 border-0"
                                  aria-labelledby="dropdownMenuLink"
                                >
                                  <a
                                    className="dropdown-item p-t-5 p-b-5"
                                    href="#"
                                  >
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item p-t-5 p-b-5"
                                    href="#"
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-t-15 p-b-15">
                              <a className="text-bodycolor p-0" href="#">
                                MailGet
                                <br />
                                <span className="font-12 text-secondary">
                                  {" "}
                                  5 Plans
                                </span>
                                <span className="font-12 text-secondary m-l-5">
                                  {" "}
                                  • 2 Coupons
                                </span>
                                <span className="font-12 text-secondary m-l-5">
                                  {" "}
                                  • 3 Addons
                                </span>
                              </a>
                            </td>
                            <td className="m-w-10">
                              <div className="dropdown d-none text-right">
                                <i
                                  className="fas fa-ellipsis-v text-secondary font-16"
                                  data-toggle="dropdown"
                                ></i>
                                <div
                                  className="dropdown-menu dropdown-menu-right font-14 border-0"
                                  aria-labelledby="dropdownMenuLink"
                                >
                                  <a
                                    className="dropdown-item p-t-5 p-b-5"
                                    href="#"
                                  >
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item p-t-5 p-b-5"
                                    href="#"
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-t-15 p-b-15">
                              <a className="text-bodycolor p-0" href="#">
                                PSB Extra Customization
                                <br />
                                <span className="font-12 text-secondary">
                                  {" "}
                                  5 Plans
                                </span>
                                <span className="font-12 text-secondary m-l-5">
                                  {" "}
                                  • 2 Coupons
                                </span>
                                <span className="font-12 text-secondary m-l-5">
                                  {" "}
                                  • 3 Addons
                                </span>
                              </a>
                            </td>
                            <td className="m-w-10">
                              <div className="dropdown d-none text-right">
                                <i
                                  className="fas fa-ellipsis-v text-secondary font-16"
                                  data-toggle="dropdown"
                                ></i>
                                <div
                                  className="dropdown-menu dropdown-menu-right font-14 border-0"
                                  aria-labelledby="dropdownMenuLink"
                                >
                                  <a
                                    className="dropdown-item p-t-5 p-b-5"
                                    href="#"
                                  >
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item p-t-5 p-b-5"
                                    href="#"
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-t-15 p-b-15">
                              <a className="text-bodycolor p-0" href="#">
                                Email Notification
                                <br />
                                <span className="font-12 text-secondary">
                                  {" "}
                                  5 Plans
                                </span>
                                <span className="font-12 text-secondary m-l-5">
                                  {" "}
                                  • 2 Coupons
                                </span>
                                <span className="font-12 text-secondary m-l-5">
                                  {" "}
                                  • 3 Addons
                                </span>
                              </a>
                            </td>
                            <td className="m-w-10">
                              <div className="dropdown d-none text-right">
                                <i
                                  className="fas fa-ellipsis-v text-secondary font-16"
                                  data-toggle="dropdown"
                                ></i>
                                <div
                                  className="dropdown-menu dropdown-menu-right font-14 border-0"
                                  aria-labelledby="dropdownMenuLink"
                                >
                                  <a
                                    className="dropdown-item p-t-5 p-b-5"
                                    href="#"
                                  >
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item p-t-5 p-b-5"
                                    href="#"
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="card-footer bg-white p-20 p-l-10 p-r-10 m-l-20 m-r-20">
                    <div className="row">
                      <div className="col-md-6 col-7 d-flex">
                        <div className="dropdown m-r-10 ">
                          <select
                            className="from-control border bg-white dropdown-toggle text-secondary p-1 font-14 rounded"
                            id="inputGroupSelect01"
                            defaultValue=""
                          >
                            <option  value="1">
                              10
                            </option>
                            <option value="2">20</option>
                            <option value="3">30</option>
                          </select>
                        </div>
                        <div className="text-secondary font-14 m-t-5 d-none d-sm-block d-lg-none">
                          Showing 11-20 of 50 Records
                        </div>
                      </div>
                      <div className="col-md-6 col-5">
                        <nav aria-label="Page navigation">
                          <ul className="pagination justify-content-end font-14 m-b-0">
                            <li className="page-item m-r-10">
                              <a
                                className="page-link rounded p-l-20 p-r-20 p-t-5 p-b-5"
                                href="#"
                                tabIndex="-1"
                              >
                                <i className="fas fa-chevron-left text-secondary font-12"></i>
                              </a>
                            </li>
                            <li className="page-item m-r-10 disabled">
                              <a
                                className="page-link rounded border-primary text-bodycolor p-l-20 p-r-20 p-t-5 p-b-5"
                                href="#"
                              >
                                5
                              </a>
                            </li>
                            <li className="m-t-5 m-r-10 d-none d-md-block d-lg-none ">
                              <span className="text-secondary font-14">
                                5 of 10
                              </span>
                            </li>
                            <li className="page-item">
                              <a
                                className="page-link rounded p-l-20 p-r-20 p-t-5 p-b-5"
                                href="#"
                              >
                                <i className="fas fa-chevron-right text-secondary font-12"></i>
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-12 col-12 pl-0 pr-0 pl-sm-3 pr-sm-3">
                <SimpleForm onSubmit={onSubmit} />
              </div>
            </div>
          </div>
        </div>

        <div className="fg-main-footer bg-white border-top w-100">
          <div className="col-md-12">
            <p className="sub_footer_text m-t-10 m-b-10 text-center">
              Pabbly © 2019 All rights reserved.
            </p>
          </div>
        </div>

        <div className="container demo">
          <div
            className="modal left fade"
            id="sidebarToggleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="sidebarToggleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-toggle-sidebar" role="document">
              <div className="modal-content bg-bodycolor border-0 h-100 rounded-0">
                <div className="modal-header bg-white rounded-0">
                  <a className href="#">
                    <img
                      className="w-85"
                      src="assets/images/sb-logo.png"
                      alt="Subscription Billing Logo"
                    />
                  </a>
                </div>
                <div className="modal-body p-0">
                  <div className="bg-bodycolor">
                    <div id="fg-sidebar" className="bg-bodycolor h-100">
                      <ul className="fg-sidebar-menu p-0">
                        <li className="sidebar-list-item text-center p-15">
                          <a
                            href="/boilerplate-templates/subscription-billing-affiliate/dashboard.html"
                            className="d-flex"
                          >
                            <i className="fas fa-tachometer-alt text-white w-15 m-r-10"></i>
                            <span className="text-center d-block text-white font-12">
                              Dashboard
                            </span>
                          </a>
                        </li>
                        <li className="sidebar-list-item text-center p-15 active">
                          <a
                            href="/boilerplate-templates/subscription-billing-affiliate/products.html"
                            className="d-flex"
                          >
                            <i className="fab fa-product-hunt text-white w-15 m-r-10"></i>
                            <span className="text-center d-block text-white font-12">
                              Products
                            </span>
                          </a>
                        </li>
                        <li className="sidebar-list-item text-center p-15">
                          <a
                            href="/boilerplate-templates/subscription-billing-affiliate/customers.html"
                            className="d-flex"
                          >
                            <i className="fas fa-user text-white w-15 m-r-10"></i>
                            <span className="text-center d-block text-white font-12">
                              Customers
                            </span>
                          </a>
                        </li>
                        <li className="sidebar-list-item text-center p-15">
                          <a
                            href="/boilerplate-templates/subscription-billing-affiliate/sales.html"
                            className="d-flex"
                          >
                            <i className="fas fa-user text-white w-15 m-r-10"></i>
                            <span className="text-center d-block text-white font-12">
                              Sales
                            </span>
                          </a>
                        </li>
                        <li className="sidebar-list-item text-center p-15">
                          <a
                            href="/boilerplate-templates/subscription-billing-affiliate/subscription.html"
                            className="d-flex"
                          >
                            <i className="fas fa-hand-holding-usd text-white w-15 m-r-10"></i>
                            <span className="text-center d-block text-white font-12">
                              Subscription
                            </span>
                          </a>
                        </li>
                        <li className="sidebar-list-item text-center p-15">
                          <a
                            href="/boilerplate-templates/subscription-billing-affiliate/invoice.html"
                            className="d-flex"
                          >
                            <i className="fab fa-stripe-s text-white w-15 m-r-10"></i>
                            <span className="text-center d-block text-white font-12">
                              Invoice
                            </span>
                          </a>
                        </li>

                        <li className="sidebar-list-item text-center p-15">
                          <a
                            href="/boilerplate-templates/subscription-billing-affiliate/settings-profile-settings.html"
                            className="d-flex"
                          >
                            <i className="fas fa-chart-bar text-white w-15 m-r-10"></i>
                            <span className="text-center d-block text-white font-12">
                              Settings
                            </span>
                          </a>
                        </li>

                        <li className="sidebar-list-item text-center p-15">
                          <a
                            href="/boilerplate-templates/subscription-billing-affiliate/affiliate.html"
                            className="d-flex"
                          >
                            <i className="fas fa-podcast text-white w-15 m-r-10"></i>
                            <span className="text-center d-block text-white font-12">
                              Affiliate
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="shareCheckoutPlan"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="shareCheckoutPlanLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header border-primary2 align-items-center">
                <div className="col-md-9 p-l-0">
                  <h2 className="modal-title">Share Your Checkout Plan Link</h2>
                </div>
                <div className="col-md-3 p-r-0">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="form-group col-md-10 p-r-0">
                    <label>
                      Plan Link<span className="text-danger">*</span>
                    </label>
                    <div className="d-flex">
                      <div className="input-group m-r-10">
                        <input
                          type="text"
                          id="wp-shortcode"
                          className="form-control h-auto"
                          placeholder="https://payments.pabbly.com/subscribe/5e75abc670dbd219cd252bc7"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="button">
                            Copy
                          </button>
                        </div>
                      </div>
                    </div>
                    <small className="form-text text-muted">
                      Grab the link and spread it to your audience to get them
                      subscribed on your plans.
                    </small>
                  </div>
                  <div className="form-group col-md-2 align-middle p-l-0">
                    <div className="p-t-30 text-center">
                      <a href="/boilerplate-templates/subscription-billing-affiliate/checkout-page.html">
                        <i className="fas fa-eye border border-primary rounded p-10 text-primary"></i>
                      </a>
                    </div>
                  </div>
                  <div className="form-group col-md-12">
                    <label>Share on social Network</label>
                    <div>
                      <i className="fab fa-facebook-square m-r-5"></i>
                      <i className="fab fa-twitter-square"></i>
                    </div>
                  </div>
                  <div className="form-group col-md-12">
                    <label>Embed Plan Link</label>
                    <textarea className="form-control" rows="3">
                      
                    </textarea>
                    <small className="form-text text-muted">
                      Use this code to insert the checkout page on your website
                      and start selling your items.
                    </small>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-primary2">
                <button
                  type="submit"
                  className="btn border text-secondary font-15"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade show usedLicense"
          id="usedLicense"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="usedLicenseLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog commission-modal-slideout modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-primary2 align-items-center">
                <div className="col-md-9 p-l-0">
                  <h2 className="modal-title">License</h2>
                  <p className="text-secondary m-b-0 font-12">
                    Pabbly Subscription Billing License
                  </p>
                </div>
                <div className="col-md-3 p-r-0">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
              </div>
              <div className="modal-body bg-body p-35">
                <div className="card">
                  <div className="card-header p-t-15 p-b-15">
                    <div className="row align-items-center">
                      <div className="col-md-6 mb-2 mb-md-0">
                        <div className="text-secondary">
                          <i
                            className="fas fa-trash border bg-white rounded p-10 font-12 m-r-5"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Delete"
                          ></i>
                          <i
                            className="fas fa-file-export border p-10 font-12 rounded bg-white"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Export"
                          ></i>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="text-secondary d-flex justify-content-md-end justify-content-start">
                          <i
                            className="toggle-filter fas fa-filter border font-12 rounded m-r-10 bg-white p-10"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Filter"
                          ></i>
                          <div className="filter-dropdown bg-white border p-3 rounded">
                            <button
                              type="button"
                              id="filter-btn"
                              className="btn btn-outline-primary1 bg-primary2 font-demi text-bodycolor font-12 p-1 m-b-10 p-r-5"
                            >
                              Add Filter
                              <i className="fas fa-plus-circle rounded m-1"></i>
                            </button>
                            <button
                              type="button"
                              id="filter-btn"
                              className="btn btn-outline-primary1 bg-primary2 font-demi text-bodycolor font-12 p-1 m-b-10 p-r-5"
                            >
                              Customer Name Contains
                              <i className="fas fa-times-circle rounded m-1"></i>
                            </button>
                            <button
                              type="button"
                              id="filter-btn"
                              className="btn btn-outline-primary1 bg-primary2 font-demi text-bodycolor font-12 p-1 m-b-10 p-r-5"
                            >
                              Choose Attributes
                            </button>
                            <div className="form-group">
                              <select
                                className="selectpicker form-control font-15"
                                id="select-4"
                                data-live-search="true"
                                defaultValue=""
                              >
                                <option data-tokens="Customer">Date</option>
                                <option data-tokens="Customer ID">
                                  Customer
                                </option>
                                <option data-tokens="Customer Name">
                                  Product
                                </option>
                                <option data-tokens="Customer Email">
                                  License Name
                                </option>
                              </select>
                            </div>
                            <div className="form-group">
                              <div className="card">
                                <div className="card-body">
                                  <select
                                    className="selectpicker form-control font-15"
                                    id="select-6"
                                    data-live-search="true"
                                    defaultValue=""
                                  >
                                    <option data-tokens="Contains">
                                      Contains
                                    </option>
                                    <option data-tokens="Does not contains">
                                      Customer ID
                                    </option>
                                    <option data-tokens="Equals">Equals</option>
                                    <option data-tokens="Not equals to">
                                      Not equals to
                                    </option>
                                    <option data-tokens="Starts With">
                                      Customer Phone
                                    </option>
                                  </select>
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary border font-15 m-t-10 float-right"
                                  >
                                    Apply Filter
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <i
                            className="toggle-search fas fa-search border font-12 rounded bg-white p-10"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Search"
                          ></i>
                          <div className="search-dropdown bg-white border p-3 rounded">
                            <div className="input-group font-14 m-b-10">
                              <input
                                type="text"
                                className="form-control border rounded-left"
                                placeholder=""
                              />
                              <div className="input-group-append">
                                <button
                                  className="btn btn-primary2 text-secondary rounded-right bg-primary2 border p-t-5 p-b-5"
                                  type="button"
                                >
                                  <i className="fa fa-search"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="text-nowrap table table-hover m-b-0">
                      <thead>
                        <tr>
                          <th className="p-r-0 align-middle" scope="col">
                            <div className="custom-control custom-checkbox m-l-5">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="checkAll"
                              />
                              <label
                                className="custom-control-label p-0"
                                htmlFor="checkAll"
                              ></label>
                            </div>
                          </th>
                          <th className="align-middle" scope="col">
                            DATE
                          </th>
                          <th className="align-middle" scope="col">
                            CUSTOMER
                          </th>
                          <th className="align-middle" scope="col">
                            PRODUCT
                          </th>
                          <th className="align-middle" scope="col">
                            LICENSE CODE
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-r-0">
                            <div className="custom-control custom-checkbox m-l-5">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="commChk"
                              />
                              <label
                                className="custom-control-label p-0"
                                htmlFor="commChk"
                              ></label>
                            </div>
                          </td>
                          <td>Mar 04, 2020</td>
                          <td>
                            <a
                              href="/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="9ffef1ecf2f6ebf7adafadafdffef0f3b1fcf0f2"
                            >
                              [email&#160;protected]
                            </a>
                          </td>
                          <td>
                            Pabbly Email Marketing
                            <a className="text-primary font-12 p-0" href="#">
                              INV-8153
                            </a>
                          </td>
                          <td>FIRSTCODE</td>
                        </tr>
                        <tr>
                          <td className="p-r-0">
                            <div className="custom-control custom-checkbox m-l-5">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="commChk1"
                              />
                              <label
                                className="custom-control-label p-0"
                                htmlFor="commChk1"
                              ></label>
                            </div>
                          </td>
                          <td>Mar 04, 2020</td>
                          <td>
                            <a
                              href="/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="d6b9bebfb7b0a6beb3a4afe4e6e696b1bbb7bfbaf8b5b9bb"
                            >
                              [email&#160;protected]
                            </a>
                          </td>
                          <td>
                            Pabbly Email Marketing
                            <a className="text-primary font-12 p-0" href="#">
                              INV-2153
                            </a>
                          </td>
                          <td>SECONDCODE</td>
                        </tr>
                        <tr>
                          <td className="p-r-0">
                            <div className="custom-control custom-checkbox m-l-5">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="commChk2"
                              />
                              <label
                                className="custom-control-label p-0"
                                htmlFor="commChk2"
                              ></label>
                            </div>
                          </td>
                          <td>Mar 04, 2020</td>
                          <td>
                            <a
                              href="/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="f09282999c9c99919e84b09282999c9c99919e848082919384999395de939f9d"
                            >
                              [email&#160;protected]
                            </a>
                          </td>
                          <td>
                            Pabbly Email Marketing
                            <a className="text-primary font-12 p-0" href="#">
                              INV-2693
                            </a>
                          </td>
                          <td>THIRDCODE</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="card-footer bg-white p-20">
                    <div className="row">
                      <div className="col-md-6 col-7 d-flex">
                        <div className="dropdown m-r-10 ">
                          <select
                            className="from-control border bg-white dropdown-toggle text-secondary p-1 font-14 rounded"
                            id="inputGroupSelect01"
                            defaultValue=""
                          >
                            <option  value="1">
                              10
                            </option>
                            <option value="2">20</option>
                            <option value="3">30</option>
                          </select>
                        </div>
                        <div className="text-secondary font-14 m-t-5 d-none d-sm-block">
                          Showing 11-20 of 50 Records
                        </div>
                      </div>
                      <div className="col-md-6 col-5">
                        <nav aria-label="Page navigation">
                          <ul className="pagination justify-content-end font-14 m-b-0">
                            <li className="page-item m-r-10">
                              <a
                                className="page-link rounded p-l-20 p-r-20 p-t-5 p-b-5"
                                href="#"
                                tabIndex="-1"
                              >
                                <i className="fas fa-chevron-left text-secondary font-12"></i>
                              </a>
                            </li>
                            <li className="page-item m-r-10 disabled">
                              <a
                                className="page-link rounded border-primary text-bodycolor p-l-20 p-r-20 p-t-5 p-b-5"
                                href="#"
                              >
                                5
                              </a>
                            </li>
                            <li className="m-t-5 m-r-10 d-none d-md-block">
                              <span className="text-secondary font-14">
                                5 of 10
                              </span>
                            </li>
                            <li className="page-item">
                              <a
                                className="page-link rounded p-l-20 p-r-20 p-t-5 p-b-5"
                                href="#"
                              >
                                <i className="fas fa-chevron-right text-secondary font-12"></i>
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="addProduct"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="addProductLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header border-primary2 align-items-center">
                <div className="col-md-9 p-l-0">
                  <h2 className="modal-title">Add Product</h2>
                </div>
                <div className="col-md-3 p-r-0">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="form-group col-md-12">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                    <small className="form-text text-muted">
                      Enter the product name. This name will be displayed on the
                      checkout page.
                    </small>
                  </div>
                  <div className="form-group col-md-12">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="productDescription"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="productDescription"
                      >
                        Product Description (Optional)
                      </label>
                    </div>
                    <div className="row m-t-15 p-l-15 p-r-15 product-description">
                      <textarea
                        defaultValue=""
                        className="form-control"
                        rows="3"
                      ></textarea>
                      <small className="form-text text-muted">
                        Add short description of your product. This description
                        is only for your reference.
                      </small>
                    </div>
                  </div>
                  <div className="form-group col-md-12">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customRedirect"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customRedirect"
                      >
                        Custom Redirect (Optional).
                      </label>
                    </div>
                    <div className="row m-t-15 p-l-15 p-r-15 custom-redirect">
                      <label>Redirect Url</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Redirect Url"
                      />
                      <small className="form-text text-muted">
                        Enter a custom link to redirect your customers after a
                        successful purchase. Or, leave the field blank to use
                        the default Thank You page. Link Format:
                        https://www.example.com
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-primary2">
                <button
                  type="submit"
                  className="btn border text-secondary font-15"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary font-15 m-l-5">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPlan;
