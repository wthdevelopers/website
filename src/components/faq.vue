<template>

  <div class="row" style="padding-top: 30px; font-family: 'Nunito', sans-serif">
    <div id="faq"><h1 id="h1a">FAQs</h1></div>

<div class="faqs round shadow">
  <div class="collapse collapse-item qn1">
    <div class="collapse-header touchable" role="tab" @click="active = !active">
      <slot name="collapse-header">Is this hackathon free?</slot>
      <div class="arrow" :class="rotate()">
    <icon name="caret-down"/></div>
    </div>
    <transition name="fade">
      <div class="collapse-content" v-if="active">
        <div class="collapse-content-box">
          <slot name="collapse-body">Yes, this hackathon is free. All that we ask of you is for you to come down on the day itself!</slot>
        </div>
      </div>
    </transition>
  </div>

  <div class="collapse collapse-item">
    <div class="collapse-header touchable" role="tab" @click="active1 = !active1">
      <slot name="collapse-header">Who can join this hackathon?</slot>
      <div class="arrow" :class="rotate1()">
    <icon name="caret-down"/></div>
    </div>
    <transition name="fade">
      <div class="collapse-content" v-if="active1">
        <div class="collapse-content-box">
          <slot name="collapse-body">This competition is open to anybody 13 years old and above as at the date of the competition. Anyone below 18 years old will require his/her parent’s consent to participate in the competition. Please print out the consent and indemnity form which can be found <a href="http://www.bit.ly/wthindemnityv1"> here</a> for your parent’s signature and bring it on the day of the competition.</slot>
        </div>
      </div>
    </transition>
  </div>

  <div class="collapse collapse-item">
    <div class="collapse-header touchable" role="tab" @click="active2 = !active2">
      <slot name="collapse-header">What does it mean by "Ideas are open to interpretation"?</slot>
      <div class="arrow" :class="rotate2()">
    <icon name="caret-down"/></div>
    </div>
    <transition name="fade">
      <div class="collapse-content" v-if="active2">
        <div class="collapse-content-box">
          <slot name="collapse-body">It means that you can decide how you want to argue your stance. An example would be interpreting space as Outer Space (rockets, moon, planets) or Space in an architectural sense (a space we live in).</slot>
        </div>
      </div>
    </transition>
  </div>

  <div class="collapse collapse-item">
    <div class="collapse-header touchable" role="tab" @click="active3 = !active3">
      <slot name="collapse-header">What is the maximum team size?</slot>
      <div class="arrow" :class="rotate3()">
    <icon name="caret-down"/></div>
    </div>
    <transition name="fade">
      <div class="collapse-content" v-if="active3">
        <div class="collapse-content-box">
          <slot name="collapse-body">4 members maximum.</slot>
        </div>
      </div>
    </transition>
  </div>

  <div class="collapse collapse-item">
    <div class="collapse-header touchable" role="tab" @click="active4 = !active4">
      <slot name="collapse-header">What are my transport/parking options for getting to and from the event?</slot>
      <div class="arrow" :class="rotate4()">
    <icon name="caret-down"/></div>
    </div>
    <transition name="fade">
      <div class="collapse-content" v-if="active4">
        <div class="collapse-content-box">
          <slot name="collapse-body">If you are taking public transport, you can take bus 2 and 24 from Tanah Merah MRT and bus 5 from Simei MRT.
                    <br>If you are driving, you can park in SUTD's basement carpark.</slot>
        </div>
      </div>
    </transition>
  </div>

  <div class="collapse collapse-item">
    <div class="collapse-header touchable" role="tab" @click="active5 = !active5">
      <slot name="collapse-header">What can I bring to the event?</slot>
      <div class="arrow" :class="rotate5()">
    <icon name="caret-down"/></div>
    </div>
    <transition name="fade">
      <div class="collapse-content" v-if="active5">
        <div class="collapse-content-box">
          <slot name="collapse-body">Things like your laptops or any materials that you will need to create your prototype. We will provide basics like arduinos and some sensors to prototype your idea with.</slot>
        </div>
      </div>
    </transition>
  </div>

  <div class="collapse collapse-item">
    <div class="collapse-header touchable" role="tab" @click="active6 = !active6">
      <slot name="collapse-header">How do we handle Intellectual Property (IP)?</slot>
      <div class="arrow" :class="rotate6()">
    <icon name="caret-down"/></div>
    </div>
    <transition name="fade">
      <div class="collapse-content" v-if="active6">
        <div class="collapse-content-box">
          <slot name="collapse-body">lease refer to the Terms and Conditions of the Competition with regards to IP. You can download the Terms and Conditions <a href="http://bit.ly/wthtncv2"> here</a>.</slot>
        </div>
      </div>
    </transition>
  </div>

  <div class="collapse collapse-item">
    <div class="collapse-header touchable" role="tab" @click="active7 = !active7">
      <slot name="collapse-header">What if I dont have any skills with fabrication?</slot>
      <div class="arrow" :class="rotate7()">
    <icon name="caret-down"/></div>
    </div>
    <transition name="fade">
      <div class="collapse-content" v-if="active7">
        <div class="collapse-content-box">
          <slot name="collapse-body">No worries! The point of What The Hack is to learn and to use what you have learned to create something. We will be holding several workshops for beginners to learn more about fabrication techniques and how to use the machinery provided during the hackathon!</slot>
        </div>
      </div>
    </transition>
  </div>

  <div class="collapse collapse-item">
    <div class="collapse-header touchable" role="tab" @click="active8 = !active8">
      <slot name="collapse-header">Can I start ideating before the competition?</slot>
      <div class="arrow" :class="rotate8()">
    <icon name="caret-down"/></div>
    </div>
    <transition name="fade">
      <div class="collapse-content" v-if="active8">
        <div class="collapse-content-box">
          <slot name="collapse-body">Yes, you can begin conceptualizing your ideas or planning your approach to the themes before the competition. However only work done on the prototype during the competition itself will be judged.</slot>
        </div>
      </div>
    </transition>
  </div>

  <div class="collapse collapse-item">
    <div class="collapse-header touchable" role="tab" @click="active9 = !active9">
      <slot name="collapse-header">Where can I find the indemnity form?</slot>
      <div class="arrow" :class="rotate9()">
    <icon name="caret-down"/></div>
    </div>
    <transition name="fade">
      <div class="collapse-content" v-if="active9">
        <div class="collapse-content-box">
          <slot name="collapse-body">Participants below the age of 18 will need their parent’s consent to participate in the competition. Thus, they will need to submit the consent and indemnity form signed by their parent/guardian at the registration counter on the day of the competition. For all other participants, we will provide the forms for your signature at the registration counter on the day of the competition itself! You can download the indemnity form from <a href="http://www.bit.ly/wthindemnityv1"> here</a>.</slot>
        </div>
      </div>
    </transition>
  </div>

  <div class="collapse collapse-item qn10">
    <div class="collapse-header touchable" role="tab" @click="active10 = !active10">
      <slot name="collapse-header">My question can't be found in the the FAQs! Who should I contact?</slot>
      <div class="arrow" :class="rotate10()">
    <icon name="caret-down"/></div>
    </div>
    <transition name="fade">
      <div class="collapse-content" v-if="active10">
        <div class="collapse-content-box">
          <slot name="collapse-body">For any queries or clarification, please feel free to drop us a email at <a href="mailto:queries@sutdwth.com?Subject='Queries about What The Hack'">queries@sutdwth.com</a>.</slot>
        </div>
      </div>
    </transition>
  </div>
</div>
</div>

</template>

<style lang="css">
@import url("https://fonts.googleapis.com/css?family=Nunito");

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
 .collapse {
  margin: 20px 20px 20px 20px;
}
.collapse .collapse-header {
  padding: 20px 20px 20px 20px;
  background: #fff7f8;
  border-radius: 15px;
  position: relative;
  @includes media-breakpoint-down(xs) {
    padding: 0px 0px 0px 0px;
  }
}

/* .collapse .collapse-header > div {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
} */
/* .collapse .collapse-header h3 {
  font-size: 2.5em;
  font-weight: bold;
} */
.collapse .collapse-header::before {
  -moz-transition: all .2s;
  -o-transition: all .2s;
  -webkit-transition: all .2s;
  transition: all .2s;
  position: absolute;
  font-size: 1em;
  top: calc(50% - 0.4em);
  left: 20px;
  color: #c5c9d0;
  /* -moz-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg); */
}
.collapse-header:hover {
  background-color: #ffa6c7;
  cursor: pointer;
}
/* .collapse.is-active .collapse-header::before {
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
} */
.collapse .collapse-content-box {
  -moz-transition: all .2s;
  -o-transition: all .2s;
  -webkit-transition: all .2s;
  transition: all .2s;
  padding: 30px 40px;
  @includes media-breakpoint-down(xs) {
    padding: 5px 10px;
  }
  /* border-left: 2px solid #fff7f8;
  border-bottom: 2px solid #fff7f8;
  border-right: 2px solid #fff7f8;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px; */
}
.arrow {
  float: right;
  color: #ff7bac;
}

h1 {
  text-align: center;
  color: #ff7bac;
}
.faqs {
  margin: 0px 150px 100px 150px;
  background-color: #ffebf1;
}
@@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .faqs {
    margin: 0px 10px 10px 10px;
  }
}
.qn1 {
  padding-top: 20px;
}
.qn10 {
  padding-bottom: 20px;
}
.rotate {
  -moz-transform:rotate(180deg);
  -webkit-transform:rotate(180deg);
  transform:rotate(180deg);
}
.round {
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
}
.shadow {
  -moz-box-shadow:    0px 20px 0 0 #ffa6c7;
  -webkit-box-shadow: 0px 20px 0 0 #ffa6c7;
  box-shadow:         0px 20px 0 0 #ffa6c7;
}

</style>

<script>
import Icon from 'vue-awesome/components/Icon'

export default {
  name: 'faq',
  components: {
    Icon
  },
  // data: {
  //   sel: 0
  // }
  // data: {
  //   faqs: [
  //     { qn: 'Is this hackathon free?',
  //       ans: 'Yes, this hackathon is free. All that we ask of you is for you to come down on the day itself!'
  //     },
  //     { qn: 'Who can join this hackathon?',
  //       ans: 'This competition is open to anybody 13 years old and above as at the date of the competition. Anyone below 18 years old will require his/her parent’s consent to participate in the competition. Please print out the consent and indemnity form which can be found <a href="http://www.bit.ly/wthindemnityv1"> here </a>for your parent’s signature and bring it on the day of the competition.'
  //     }
  //   ]
  // },
  data() {
    return {
    active: false,
    active1: false,
    active2: false,
    active3: false,
    active4: false,
    active5: false,
    active6: false,
    active7: false,
    active8: false,
    active9: false,
    active10: false
    }
  },
  methods: {
    rotate () {
      let arrowUp = 'rotate'
      if (this.active === true){
        return arrowUp
      }
    },
    rotate1 () {
      let arrowUp = 'rotate'
      if (this.active1 === true){
        return arrowUp
      }
    },
    rotate2 () {
      let arrowUp = 'rotate'
      if (this.active2 === true){
        return arrowUp
      }
    },
    rotate3 () {
      let arrowUp = 'rotate'
      if (this.active3 === true){
        return arrowUp
      }
    },
    rotate4 () {
      let arrowUp = 'rotate'
      if (this.active4 === true){
        return arrowUp
      }
    },
    rotate5 () {
      let arrowUp = 'rotate'
      if (this.active5 === true){
        return arrowUp
      }
    },
    rotate6 () {
      let arrowUp = 'rotate'
      if (this.active6 === true){
        return arrowUp
      }
    },
    rotate7 () {
      let arrowUp = 'rotate'
      if (this.active7 === true){
        return arrowUp
      }
    },
    rotate8 () {
      let arrowUp = 'rotate'
      if (this.active8 === true){
        return arrowUp
      }
    },
    rotate9 () {
      let arrowUp = 'rotate'
      if (this.active9 === true){
        return arrowUp
      }
    },
    rotate10 () {
      let arrowUp = 'rotate'
      if (this.active10 === true){
        return arrowUp
      }
    }
  }
}
</script>
