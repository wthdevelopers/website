<template>
  <section class="schedule__table">
    <h1 class="table__title">Schedule</h1>
    <table class="table__container">
        <tr>
            <th v-for="title in titles" class="table__header">
              {{ title }}
            </th>
        </tr>
        <tr v-for="schedules in table">
          <td v-for="schedule in schedules" v-html="schedule">{{ schedule }}</td>
        </tr>
        <tr>
          <th v-for="index in 3" class="table__footer"></th>
        </tr>
    </table>
  </section>
</template>


<script>
export default {
  name: 'Schedule',
  data:()=> {
    return {
      titles: [ 'Day', 'Timing', 'Activity' ],
      table: {
        schedule1: [ 'Sat', '0900-1000', 'Registration' ],
        schedule2: [ 'Sat', '1000-1100', 'Briefing' ],
        schedule3: [ 'Sun/Sat', '1100-1100', 'Hacking' ],
        schedule4: [ 'Sun', '1100-1300', 'Exhibition Setup' ],
        schedule5: [ 'Sun', '1300-1400', 'Lunch' ],
        schedule6: [ 'Sun', '1400-1600', 'Judging' ],
        schedule7: [ 'Sun', '1600-1700', 'Prize Presentation' ]
      }
    }
  },
  created: function() {
    if (window.screen.width >= 320 && window.screen.width <= 800) {
      this.table.schedule1[1] = '0900<br>-<br>1000';
      this.table.schedule2[1] = '1000<br>-<br>1100';
      this.table.schedule3[0] = 'Sun/<br>Sat';
      this.table.schedule3[1] = '1100<br>-<br>1100';
      this.table.schedule4[1] = '1100<br>-<br>1300';
      this.table.schedule5[1] = '1300<br>-<br>1400';
      this.table.schedule6[1] = '1400<br>-<br>1600';
      this.table.schedule7[1] = '1600<br>-<br>1700';
    }
  }
}    
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Quicksand:700");
@import url("https://fonts.googleapis.com/css?family=Nunito");

  .schedule__table {
    width: 100%;
  }

  .table__title {
    font-family: 'Quicksand', sans-serif;
    font-size: 2.5vw;
    text-align: center;
    margin: 0 auto;
    padding: 0;
    color: #6eadff;
    margin-bottom: 1.2vw;
    background: white;
    border-radius: 5vw;
    width: 45%;
  }

  .table__container {
    font-family: 'Nunito', sans-serif;
    background-color: #dbebff;
    table-layout: auto;
    width: 100%;
    border-radius: 6vw;
    border-collapse: collapse;
    box-shadow: -1.2vw 1.2vw #a3d6f3;
    text-align: left;
    font-size: 1.2vw;
    margin: 0;
  }

  th {
    height: 7.8vw;
    vertical-align: bottom;
    background-color: #dbebff;
    padding-bottom: 0.6vw;
  }

  th.table__header:first-child {
    border-top-left-radius: 6vw;
    padding-left: 1.6vw;
  }

  th:nth-child(2) {
    text-align: center;
    padding-left: 3vw;
    padding-right: 3vw;
  }

  th.table__header:last-child {
    border-top-right-radius: 6vw;
  }

  th.table__footer:first-child {
    border-bottom-left-radius: 6vw;
    padding-left: 1.6vw;
  }

  th.table__footer:last-child {
    border-bottom-right-radius: 6vw;
  }

  tr:nth-child(even) {
    background-color: #f1f7ff;
  }

  td {
    padding: 0.3vw 0;
    line-height: 4vw;
    font-weight: bold;
  }

  td:first-child {
    padding-left: 1.6vw;
  }

  td:nth-child(2) {
    text-align: center;
    padding-left: 1vw;
    padding-right: 1vw;
  }


  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    .schedule__table {
      margin: 0 auto;
      width: 90%;
    }

    .table__title {
      font-size: 2em;
      margin-bottom: 0.5rem;
    }

    .table__container {
      box-shadow: 0 0.8rem #a3d6f3;
      font-size: 0.8rem;
      border-radius: 4rem;
    }
      
    th {
      height: 4rem;
      padding-bottom: 0.2rem;
    }

    th.table__header:first-child {
      border-top-left-radius: 4rem;
      padding-left: 1.2rem;
    }

    th.table__header:last-child {
      border-top-right-radius: 4rem;
    }

    th.table__footer:first-child {
      border-bottom-left-radius: 4rem;
      padding-left: 1.2rem;
    }

    th.table__footer:last-child {
      border-bottom-right-radius: 4rem;
    }

    th:nth-child(2) {
      padding-left: 1.1rem;
      padding-right: 1.1rem;
    }

    td {
      line-height: 1.2rem;
    }

    td:first-child {
      padding-left: 1.2rem;
    }
    
    td:nth-child(2) {
      padding-left: 1.1rem;
      padding-right: 1.1rem;
    }
}

  @media only screen and (min-device-width:768px) and (max-device-width:800px) {
    .schedule__table {
      margin: 0 auto;
      width: 90%;
    }

    .table__title {
      font-size: 3.5rem;
      margin-bottom: 0.5rem;
    }
    
    .table__container {
      font-size: 2rem;
      box-shadow: 0 1.2rem #a3d6f3;
      border-radius: 6rem;
    }

    th {
      height: 7rem;
      padding-bottom: 0.5rem;
    }

    th.table__header:first-child {
      border-top-left-radius: 6rem;
      padding-left: 2.5rem;
    }

    th:nth-child(2) {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    th.table__header:last-child {
      border-top-right-radius: 6rem;
    }

    th.table__footer:first-child {
      border-bottom-left-radius: 6rem;
      padding-left: 2.5rem;
    }

    th.table__footer:last-child {
      border-bottom-right-radius: 6rem;
    }

    td {
      padding: 0.5rem 0;
      line-height: 2rem;
    }

    td:first-child {
      padding-left: 2.5rem;
    }

    td:nth-child(2) {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }
</style>