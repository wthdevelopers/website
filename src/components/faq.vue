<template>
  <div class="row" style="padding-top: 30px; text-align: center">
    <h1 id="h1a">FAQs</h1>

    <div id="faqs">
<div id="faq">
  <button id="query">Is this hackathon free?</button>
  <div id="answer">
    <p>Yes, this hackathon is free. All that we ask of you is for you to come down on the day itself!</p>
    </div>
  </div>

  <div id="faq">
    <button id="query">Who can join this hackathon?</button>
    <div id="answer">
      <p>This competition is open to anybody 13 years old and above as at the date of the competition. Anyone below 18 years old will require his/her parent’s consent to participate in the competition. Please print out the consent and indemnity form which can be found <a href="http://www.bit.ly/wthindemnityv1"> here </a>for your parent’s signature and bring it on the day of the competition.</p>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  mounted() {
    var acc = document.getElementsById("query");

    for (var i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }
}
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css?family=Nunito");

#query {
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
}

</style>
