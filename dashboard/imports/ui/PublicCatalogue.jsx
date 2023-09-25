import React from "react";
import {Meteor} from "meteor/meteor";


export const PublicCatalogue = () => {



  return (
    <main className="flex-shrink-0">

      <div className="bg-light" style={{marginTop: "58px"}}>
        <div className="h1-bg-image">

          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white p-3">
              <h1>Public Catalogue</h1>
            </div>
          </div>
        </div>
      </div>


      <div className="container row">

        <div className="col-md-3 p-0">

          <div className="flex-shrink-0 p-3 bg-dark">
            <h5 style={{color: "orange"}}>FILTERS</h5>
            <nav className="navbar-expand-sm">
              <ul className="list-unstyled ps-0">
                <li className="mb-1">
                  <button className="btn btn-toggle align-items-center rounded collapsed" data-toggle="collapse" data-target="#networks-collapse" aria-expanded="true" aria-controls="networks-collapse">
                    Networks <i className="fa-solid fa-caret-down"></i>
                  </button>
                  <div className="collapse show colaps-eu" id="networks-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 pl-3 small">
                      <li><input type="checkbox" id="check1" /><label htmlFor="check1"><a href="#" className="link-dark rounded">Filter 1</a></label></li>
                      <li><input type="checkbox" id="check2" checked="checked" /><label htmlFor="check2">Filter 2</label></li>
                      <li><input type="checkbox" id="check3" /><label htmlFor="check3"><a href="#" className="link-dark rounded">Filter 3</a></label></li>
                    </ul>
                  </div>
                </li>
                <li className="mb-1">
                  <button className="btn btn-toggle align-items-center rounded collapsed" data-toggle="collapse" data-target="#dashboard-collapse" aria-expanded="true" aria-controls="dashboard-collapse">
                    COUNTRIES <i className="fa-solid fa-caret-down"></i>
                  </button>
                  <div className="collapse colaps-eu" id="dashboard-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 pl-3 small">
                      <li><input type="checkbox" id="check4"/><label htmlFor="check4"><a href="#" className="link-dark rounded">Filter 1</a></label></li>
                      <li><input type="checkbox" id="check5" checked="checked"/><label htmlFor="check5">Filter 2</label></li>
                      <li><input type="checkbox" id="check6"/><label htmlFor="check6"><a href="#" className="link-dark rounded">Filter 3</a></label></li>
                    </ul>
                  </div>
                </li>
                <li className="mb-1">
                  <button className="btn btn-toggle align-items-center rounded collapsed" data-toggle="collapse" data-target="#body-collapse" aria-expanded="true" aria-controls="body-collapse">
                    BODY PARTS <i className="fa-solid fa-caret-down"></i>
                  </button>
                  <div className="collapse colaps-eu" id="body-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 pl-3 small">
                      <li><input type="checkbox" id="check7"/><label htmlFor="check7"><a href="#" className="link-dark rounded">Filter 1</a></label></li>
                      <li><input type="checkbox" id="check8" checked="checked"/><label htmlFor="check8">Filter 2</label></li>
                      <li><input type="checkbox" id="check9"/><label htmlFor="check9"><a href="#" className="link-dark rounded">Filter 3</a></label></li>
                      <li><input type="checkbox" id="check7"/><label htmlFor="check7"><a href="#" className="link-dark rounded">Filter 1</a></label></li>
                      <li><input type="checkbox" id="check8" checked="checked"/><label htmlFor="check8">Filter 2</label></li>
                      <li><input type="checkbox" id="check9"/><label htmlFor="check9"><a href="#" className="link-dark rounded">Filter 3</a></label></li>
                      <li><input type="checkbox" id="check7"/><label htmlFor="check7"><a href="#" className="link-dark rounded">Filter 1</a></label></li>
                      <li><input type="checkbox" id="check8" checked="checked"/><label htmlFor="check8">Filter 2</label></li>
                      <li><input type="checkbox" id="check9"/><label htmlFor="check9"><a href="#" className="link-dark rounded">Filter 3</a></label></li>
                      <li><input type="checkbox" id="check7"/><label htmlFor="check7"><a href="#" className="link-dark rounded">Filter 1</a></label></li>
                      <li><input type="checkbox" id="check8" checked="checked"/><label htmlFor="check8">Filter 2</label></li>
                      <li><input type="checkbox" id="check9"/><label htmlFor="check9"><a href="#" className="link-dark rounded">Filter 3</a></label></li>
                      <li><input type="checkbox" id="check7"/><label htmlFor="check7"><a href="#" className="link-dark rounded">Filter 1</a></label></li>
                      <li><input type="checkbox" id="check8" checked="checked"/><label htmlFor="check8">Filter 2</label></li>
                      <li><input type="checkbox" id="check9"/><label htmlFor="check9"><a href="#" className="link-dark rounded">Filter 3</a></label></li>
                      <li><input type="checkbox" id="check7"/><label htmlFor="check7"><a href="#" className="link-dark rounded">Filter 1</a></label></li>
                      <li><input type="checkbox" id="check8" checked="checked"/><label htmlFor="check8">Filter 2</label></li>
                      <li><input type="checkbox" id="check9"/><label htmlFor="check9"><a href="#" className="link-dark rounded">Filter 3</a></label></li>


                    </ul>
                  </div>
                </li></ul></nav>
          </div>
        </div>

        <div className="col-sm-9">
          <div className="row"><nav className="ml-auto">

            <ul className="pagination pagination-sm">
              <li className="page-item"> <a className="page-link" href="#" aria-label="Previous"> <span>Prev</span></a></li>
              <li className="page-item active"> <span className="page-link"> 1 <span className="sr-only">(current)</span></span></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">...</a></li>
              <li className="page-item"><a className="page-link" href="#">4</a></li>
              <li className="page-item"><a className="page-link" href="#">5</a></li>
              <li className="page-item"> <a className="page-link" href="#" aria-label="Next"> <span>Next</span></a></li>
            </ul>
          </nav></div>
          <div className="panel-group" id="accordion">
            <div className="card">
              <div className="card-header d-flex justify-content-between border-bottom">
                <div className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                    Prostate Cancer Only Images </a> 	<i className="fa-solid fa-caret-down"></i>
                </div>
              </div>
              <div id="collapse1" className="panel-collapse collapse show">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3" ><img className="image-thumbnail" src="/images/140X140.gif" width="120" height="120" alt=""/></div>
                    <div className="col-sm-9"><a className="btn btn-secondary btn-sm ml-auto" style={{float: "right"}} href="#" role="button">Add to my Library</a>
                      <ul className="eucaim-list"><li>Provider: CHAIMELEON</li>
                        <li>Studies/Subjects count: 551/403</li>
                        <li>Age range: -</li>
                        <li>Gender: Male</li>
                        <li>Modality: MRI</li>
                        <li>Body part(s): RECTUM, PROSTATE, PELVIS, ABDOMEN</li>
                        <li>Description: Only image studies of Prostate Cancer images as per April 2023</li></ul>
                    </div>
                  </div>
                </div>

              </div>

            </div>
            <div className="card">
            <div className="card-header d-flex justify-content-between border-bottom">
              <div className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                  Prostate Cancer Only Images </a> <i className="fa-solid fa-caret-down"></i>

              </div>

            </div>
            <div id="collapse2" className="panel-collapse collapse show">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3" ><img className="image-thumbnail" src="/images/140X140.gif" width="120" height="120" alt=""/></div>
                  <div className="col-md-9"><a className="btn btn-secondary btn-sm" href="#" role="button">Add to my Library</a><br/><ul className="eucaim-list"><li>datos 1</li><li>datos 2</li></ul></div>
                </div>
              </div>
            </div>
          </div>
        </div>




        </div>
      </div>
      </main>
    )
}
