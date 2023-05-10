import React, { useState } from "react";
import Head from 'next/head'

{/* PrimeTek Imports */}
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { TabMenu } from 'primereact/tabmenu';
import { Dropdown } from 'primereact/dropdown';
import { Rating } from "primereact/rating";
import { Divider } from 'primereact/divider';
import { ToggleButton } from 'primereact/togglebutton';

{/* CSS Imports */}
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import 'node_modules/primeflex/primeflex.css';
    


export default function Home() {
  const [visibleDialog1, setVisibleDialog1] = useState(false);
  const [visibleDialog2, setVisibleDialog2] = useState(false);
  const [visibleDialog3, setVisibleDialog3] = useState(false);
  const [visibleDialog4, setVisibleDialog4] = useState(false);
  const [distanceAO, setdistanceAO] = useState(false);
  const [costAO, setcostAO] = useState(false);
  const [bookingsAO, setbookingsAO] = useState(false);
  const [selectedJobOption, setSelectedJobOption] = useState(null);
  const items = [
        {label: 'Child Care'}, {label: 'Pet Care'}, {label: 'Household Services'}
    ];
    const jTypeOptions = [
      {
        name: 'All'
      },
      {
        name: 'Occassional'
      },
      {
        name: 'Full-time'
      },
      {
        name: 'Part-time'
      }
  ];
  return (
    <>
      <Head>
        <title>Wassup</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          {`
            .containerCustom {
              width: 100%;
              padding-right: 38px;
              padding-left: 38px;
              margin-right: auto;
              margin-left: auto;
            }
          `}
        </style>

      </Head>
      {/* Second Navbar Section */}
      <div className="card">
            <TabMenu model={items} />
      </div>

      {/* Content Section */}
      
      <>
      <Dialog header="Jacqueline" visible={visibleDialog1} style={{width: '40vw', height: 'auto', border: '2px solid black'}} onHide={() => setVisibleDialog1(false)}>
        <img src={`/layout/profile-default.png`} alt="defaultProfile" style={{width: '10vw', height: 'auto', display: 'block'}} />
        <Button style={{marginTop: '3vh', width: '13vw'}} label="Hire Nanny" rounded/>
      </Dialog>
      <Dialog header="Katherine" visible={visibleDialog2} style={{width: '40vw', height: 'auto', border: '2px solid black'}} onHide={() => setVisibleDialog2(false)}>
        <img src={`/layout/profile-default.png`} alt="defaultProfile" style={{width: '10vw', height: 'auto', display: 'block'}} />
        <Button style={{marginTop: '3vh', width: '13vw'}} label="Hire Nanny" rounded/>
      </Dialog>
      <Dialog header="Andrew" visible={visibleDialog3} style={{width: '40vw', height: 'auto', border: '2px solid black'}} onHide={() => setVisibleDialog3(false)}>
        <img src={`/layout/profile-default.png`} alt="defaultProfile" style={{width: '10vw', height: 'auto', display: 'block'}} />
        <Button style={{marginTop: '3vh', width: '13vw'}} label="Hire Nanny" rounded/>
      </Dialog>
      <Dialog header="Jon" visible={visibleDialog4} style={{width: '40vw', height: 'auto', border: '2px solid black'}} onHide={() => setVisibleDialog4(false)}>
        <img src={`/layout/profile-default.png`} alt="defaultProfile" style={{width: '10vw', height: 'auto', display: 'block'}} />
        <Button style={{marginTop: '3vh', width: '13vw'}} label="Hire Nanny" rounded/>
      </Dialog>
      </>

      <div className="grid" style={{fontFamily: 'Arial'}}>
        <div className="col-fixed" style={{width: '25vw'}}>
          <div style={{paddingLeft: '2.5vw', paddingTop: '5vh'}}>
            <label style={{fontWeight: 'bold'}}>Type of Job</label>
            <div style={{paddingTop: '2vh'}}>
              <Dropdown value={selectedJobOption} onChange={(e) => setSelectedJobOption(e.value)} options={jTypeOptions} optionLabel="name" 
                placeholder="All" className="w-full md:w-14rem" />
            </div>
            <div style={{paddingTop: '5vh'}} className="card">
              <label style={{fontWeight: 'bold'}}>Filters</label>
              <Divider/>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <ToggleButton checked={distanceAO} onChange={(e) => setdistanceAO(e.value)}
                onIcon="pi pi-angle-up" offIcon="pi pi-angle-down" onLabel="" offLabel=""
                style={{width: '2vw', height: '2vh'}}/>
                <label style={{fontSize: '1.2em', paddingLeft: '1vw'}}>Distance</label>
              </div>
              <Divider/>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <ToggleButton checked={costAO} onChange={(e) => setcostAO(e.value)}
                onIcon="pi pi-angle-up" offIcon="pi pi-angle-down" onLabel="" offLabel=""
                style={{width: '2vw', height: '2vh'}}/>
                <label style={{fontSize: '1.2em', paddingLeft: '1vw'}}>Cost</label>
              </div>
              <Divider/>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <ToggleButton checked={bookingsAO} onChange={(e) => setbookingsAO(e.value)}
                onIcon="pi pi-angle-up" offIcon="pi pi-angle-down" onLabel="" offLabel=""
                style={{width: '2vw', height: '2vh'}}/>
                <label style={{fontSize: '1.2em', paddingLeft: '1vw'}}>Bookings</label>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div style={{paddingTop: '5vh', color: 'black', fontFamily: 'Arial', display: 'flex', marginBottom: '4vh'}}>
            <div style={{boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.1)', cursor: 'pointer', width: '25vw', height: '48vh', background: 'white', borderRadius: '20px', marginRight: '2vw'}} onClick={() => setVisibleDialog1(true)} >
              <div style={{padding: '20px', paddingBottom: '0'}}>
                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                  <div style={{ marginRight: '1vw' }}>
                    <img src="/layout/profile-default.png" alt="defaultProfile" style={{ width: '6vw', height: 'auto' }} />
                  </div>
                  <div>
                    <h2>Jacqueline</h2>
                      <div style={{display: 'flex', alignItems: 'center'}}>
                        <Rating value={3} readOnly cancel={false} />
                        <h3 style={{paddingLeft: '1vw'}}>60</h3>
                      </div>
                      <h4>$25 / hr</h4>
                  </div>
                </div>
                <div style={{marginTop: '0.5vh', width: '100%', height: '21.5vh'}}>
                  <div style={{paddingLeft: '0.5vw', paddingBottom: '1vh', paddingTop: '1.5vh', textAlign: 'left'}}>
                    <label style={{display: 'block', cursor: 'pointer'}}>
                      <i className="pi pi-map-marker"/> 62.4 miles - Baybay City
                    </label>
                    <label style={{display: 'block', cursor: 'pointer'}}>
                      <i className="pi pi-bolt"/> Active 1 day ago
                    </label>
                    <label style={{display: 'block', cursor: 'pointer'}}>
                      <i className="pi pi-users"/> Booked by 76 families
                    </label>
                  </div>
                  <div style={{paddingLeft: '0.5vw', paddingRight: '0.5vw', textAlign: 'justify'}}>
                      <label>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Diam sollicitudin tempor id eu nisl. Gravida quis
                      blandit turpis cursus in hac.
                      </label>
                  </div>
                </div>
              </div>
            </div>

            <div style={{boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.1)', cursor: 'pointer', width: '25vw', height: '48vh', background: 'white', borderRadius: '20px', marginRight: '2vw'}} onClick={() => setVisibleDialog2(true)} >
              <div style={{padding: '20px', paddingBottom: '0'}}>
                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                  <div style={{ marginRight: '1vw' }}>
                    <img src="/layout/profile-default.png" alt="defaultProfile" style={{ width: '6vw', height: 'auto' }} />
                  </div>
                  <div>
                    <h2>Katherine</h2>
                      <div style={{display: 'flex', alignItems: 'center'}}>
                        <Rating value={4} readOnly cancel={false} />
                        <h3 style={{paddingLeft: '1vw'}}>48</h3>
                      </div>
                      <h4>$20 / hr</h4>
                  </div>
                </div>
                <div style={{marginTop: '0.5vh', width: '100%', height: '21.5vh'}}>
                  <div style={{paddingLeft: '0.5vw', paddingBottom: '1vh', paddingTop: '1.5vh', textAlign: 'left'}}>
                    <label style={{display: 'block', cursor: 'pointer'}}>
                      <i className="pi pi-map-marker"/> 31.45 miles - Ormoc City
                    </label>
                    <label style={{display: 'block', cursor: 'pointer'}}>
                      <i className="pi pi-bolt"/> Active 1 hour ago
                    </label>
                    <label style={{display: 'block', cursor: 'pointer'}}>
                      <i className="pi pi-users"/> Booked by 87 families
                    </label>
                  </div>
                  <div style={{paddingLeft: '0.5vw', paddingRight: '0.5vw', textAlign: 'justify'}}>
                      <label>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Diam sollicitudin tempor id eu nisl. Gravida quis
                      blandit turpis cursus in hac.
                      </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{paddingTop: '2.5vh', color: 'black', fontFamily: 'Arial', display: 'flex', marginBottom: '4vh'}}>
            <div style={{boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.1)', cursor: 'pointer', width: '25vw', height: '48vh', background: 'white', borderRadius: '20px', marginRight: '2vw'}} onClick={() => setVisibleDialog3(true)} >
              <div style={{padding: '20px', paddingBottom: '0'}}>
                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                  <div style={{ marginRight: '1vw' }}>
                    <img src="/layout/profile-default.png" alt="defaultProfile" style={{ width: '6vw', height: 'auto' }} />
                  </div>
                  <div>
                    <h2>Andrew</h2>
                      <div style={{display: 'flex', alignItems: 'center'}}>
                        <Rating value={2} readOnly cancel={false} />
                        <h3 style={{paddingLeft: '1vw'}}>15</h3>
                      </div>
                      <h4>$30 / hr</h4>
                  </div>
                </div>
                <div style={{marginTop: '0.5vh', width: '100%', height: '21.5vh'}}>
                  <div style={{paddingLeft: '0.5vw', paddingBottom: '1vh', paddingTop: '1.5vh', textAlign: 'left'}}>
                    <label style={{display: 'block', cursor: 'pointer'}}>
                      <i className="pi pi-map-marker"/> 115.4 miles - Maasin City
                    </label>
                    <label style={{display: 'block', cursor: 'pointer'}}>
                      <i className="pi pi-bolt"/> Active 2 days ago
                    </label>
                    <label style={{display: 'block', cursor: 'pointer'}}>
                      <i className="pi pi-users"/> Booked by 24 families
                    </label>
                  </div>
                  <div style={{paddingLeft: '0.5vw', paddingRight: '0.5vw', textAlign: 'justify'}}>
                      <label>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Diam sollicitudin tempor id eu nisl. Gravida quis
                      blandit turpis cursus in hac.
                      </label>
                  </div>
                </div>
              </div>
            </div>

            <div style={{boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.1)', cursor: 'pointer', width: '25vw', height: '48vh', background: 'white', borderRadius: '20px', marginRight: '2vw'}} onClick={() => setVisibleDialog4(true)} >
              <div style={{padding: '20px', paddingBottom: '0'}}>
                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                  <div style={{ marginRight: '1vw' }}>
                    <img src="/layout/profile-default.png" alt="defaultProfile" style={{ width: '6vw', height: 'auto' }} />
                  </div>
                  <div>
                    <h2>Jon</h2>
                      <div style={{display: 'flex', alignItems: 'center'}}>
                        <Rating value={5} readOnly cancel={false} />
                        <h3 style={{paddingLeft: '1vw'}}>34</h3>
                      </div>
                      <h4>$22.5 / hr</h4>
                  </div>
                </div>
                <div style={{marginTop: '0.5vh', width: '100%', height: '21.5vh'}}>
                  <div style={{paddingLeft: '0.5vw', paddingBottom: '1vh', paddingTop: '1.5vh', textAlign: 'left'}}>
                    <label style={{display: 'block', cursor: 'pointer'}}>
                      <i className="pi pi-map-marker"/> 70.1 miles - Merida
                    </label>
                    <label style={{display: 'block', cursor: 'pointer'}}>
                      <i className="pi pi-bolt"/> Active 5 hours ago
                    </label>
                    <label style={{display: 'block', cursor: 'pointer'}}>
                      <i className="pi pi-users"/> Booked by 53 families
                    </label>
                  </div>
                  <div style={{paddingLeft: '0.5vw', paddingRight: '0.5vw', textAlign: 'justify'}}>
                      <label>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Diam sollicitudin tempor id eu nisl. Gravida quis
                      blandit turpis cursus in hac.
                      </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}