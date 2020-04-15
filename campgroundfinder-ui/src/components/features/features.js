import React, { Component } from 'react';

// Images
import Fire from './../../assets/images/fire.png';
import Picnic from './../../assets/images/picnic.png';

export class features extends Component {

    render() {

        return (
            <section id="features" class="features">
            <div class="container">
              <div class="row d-flex align-items-center">
                <div class="text col-lg-6 order-2 order-lg-1">
                  <div class="icon"></div>
                  <h4>Find activities</h4>
                  <p>
                    Through the campground finder you can find campsites which
                    will have the activites you want to base your camping trip around.
                    Activites ranging from swimming, hiking, rock-climbing, boating and much more.
                  </p>
                </div>
                <div class="image col-lg-6 order-1 order-lg-2"><img src={Fire} alt="Fire" class="img-fluid"/></div>
              </div>
              <div class="row d-flex align-items-center">
                <div class="image col-lg-6"><img src={Picnic} alt="Picnic" class="img-fluid"/></div>
                <div class="text col-lg-6">
                  <div class="icon"></div>
                  <h4>Find accomidations</h4>
                  <p>
                    Through the campground finder you can find campsites which
                    will provided accomidations suting your every need to create
                    the perfect camping experaince. Accomidations range from
                    electricty, water/plumbing, tenting, stores and much more.
                  </p></div>
              </div>
            </div>
          </section>
        )
    }
}

export default features;