<template>
  <div class="row" style="padding-top: 30px; text-align: center">
    <h1 id="h1a">FAQs</h1>

    <div class="collapse collapse-item" :class="{ 'is-active': active }">
    <div class="collapse-header touchable" role="tab" :aria-expanded="active ? 'true' : 'false'" @click.prevent="toggle">
      <slot name="collapse-header">Is this hackathon free?</slot>
    </div>
    <transition name="fade">
      <div class="collapse-content" v-if="active">
        <div class="collapse-content-box">
          <slot name="collapse-body">Yes, this hackathon is free. All that we ask of you is for you to come down on the day itself!</slot>
        </div>
      </div>
    </transition>
  </div>

  <div class="collapse collapse-item" :class="{ 'is-active': active }">
    <div class="collapse-header touchable" role="tab" :aria-expanded="active ? 'true' : 'false'" @click.prevent="toggle">
      <slot name="collapse-header">Who can join this hackathon?</slot>
    </div>
    <transition name="fade">
      <div class="collapse-content" v-if="active">
        <div class="collapse-content-box">
          <slot name="collapse-body">This competition is open to anybody 13 years old and above as at the date of the competition. Anyone below 18 years old will require his/her parent’s consent to participate in the competition. Please print out the consent and indemnity form which can be found <a href="http://www.bit.ly/wthindemnityv1"> here </a>for your parent’s signature and bring it on the day of the competition.</slot>
        </div>
      </div>
    </transition>
  </div>

</div>

</template>

<script>

export default {
  name: 'faq',
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
  data(){
    return {
      active: false
    }
  },

  props: {
    multiple: {
      type: Boolean,
      required: false,
      default: true
    },
    selected: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  created () {
    this._isCollapseItem = true
    this.active = this.selected
  },

  ready () {
    if (this.active) {
      this.$emit('collapse-open', this.index)
    }
  },
  methods: {
    toggle () {
      this.active = !this.active
      if (this.active) {
        this.$emit('collapse-open', this.index)
      }
    }
  }
}
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css?family=Nunito");

/* #query {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
}
#answer {
  padding: 0 18px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}

#h1a {
  color: #ffa6c7;
  font-family: 'Nunito', sans-serif;
} */

.collapse {
  margin-bottom: 2px;
}
.collapse .collapse-header {
  padding: 20px 20px 20px 40px;
  background: #f7f7f7;
  border-radius: 3px;
  position: relative;
}
.collapse .collapse-header > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.collapse .collapse-header h3 {
  font-size: 0.938em;
  font-weight: bold;
}
.collapse .collapse-header::before {
  -moz-transition: all .2s;
  -o-transition: all .2s;
  -webkit-transition: all .2s;
  transition: all .2s;
  /*content: url('../arrow-down.svg');*/
  position: absolute;
  font-size: 0.4em;
  top: calc(50% - 0.4em);
  left: 20px;
  color: #c5c9d0;
  -moz-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}
.collapse.is-active .collapse-header::before {
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}
.collapse .collapse-content-box {
  -moz-transition: all .2s;
  -o-transition: all .2s;
  -webkit-transition: all .2s;
  transition: all .2s;
  padding: 30px 40px;
  border-left: 2px solid #f7f7f7;
  border-bottom: 2px solid #f7f7f7;
  border-right: 2px solid #f7f7f7;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}


</style>
