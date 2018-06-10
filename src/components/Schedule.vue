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
                schedule1: [ 'Sat', '0900 - 1000', 'Registration' ],
                schedule2: [ 'Sat', '1000 - 1100', 'Briefing' ],
                schedule3: [ 'Sun/Sat', '1100 - 1100', 'Hacking' ],
                schedule4: [ 'Sun', '1100 - 1300', 'Exhibition Setup' ],
                schedule5: [ 'Sun', '1300 - 1400', 'Lunch' ],
                schedule6: [ 'Sun', '1400 - 1600', 'Judging' ],
                schedule7: [ 'Sun', '1600 - 1700', 'Prize Presentation' ]
            }
        }
    },
    created: function() {
        if (window.screen.width >= 320 && window.screen.width <= 1024) {
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
        font-size: 3rem;
        text-align: center;
        margin: auto;
        padding: 0;
        color: #6eadff;
        margin-bottom: 1rem;
    }

    .table__container {
        font-family: 'Nunito', sans-serif;
        background-color: #dbebff;
        table-layout: auto;
        width: 100%;
        border-radius: 3rem;
        border-collapse: collapse;
        box-shadow: -1.0rem 1rem #a3d6f3;
        text-align: left;
        font-size: 1.5rem;
        margin: 0;
    }

    th {
        height: 5rem;
        vertical-align: bottom;
        background-color: #dbebff;
        padding-bottom: 0.5rem;
    }

    th.table__header:first-child {
        border-top-left-radius: 3rem;
        padding-left: 1.5rem;
    }

    th:nth-child(2) {
        text-align: center;
        padding-left: 3vw;
        padding-right: 3vw;
    }

    th.table__header:last-child {
        border-top-right-radius: 3rem;
    }

    th.table__footer:first-child {
        border-bottom-left-radius: 3rem;
        padding-left: 1.5rem;
    }

    th.table__footer:last-child {
        border-bottom-right-radius: 3rem;
    }

    tr:nth-child(even) {
        background-color: #f1f7ff;
    }

    td {
        padding: 0.5rem 0;
        line-height: 3.5rem;
        font-weight: bold;
    }

    td:first-child {
        padding-left: 1.5rem;
    }

    td:nth-child(2) {
        text-align: center;
        padding-left: 3vw;
        padding-right: 3vw;
    }


    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        .schedule__table {
            margin: 0 auto;
            width: 100%;
        }

        .table__title {
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }

        .table__container {
            box-shadow: 0 1rem #a3d6f3;
            font-size: 1rem;
        }
        
        th {
            height: 3.5rem;
            padding-bottom: 0.2rem;
        }

        th.table__header:first-child {
            padding-left: 1rem;
        }

        th:nth-child(2) {
            padding-left: 5vw;
            padding-right: 5vw;
        }

        td {
            line-height: 1rem;
        }

        td:first-child {
            padding-left: 1rem;
        }
    }

    @media only screen and (min-device-width:768px) and (max-device-width:1024px) {
        .table__title {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
        }

        td {
            line-height: 2rem;
        }
    }
</style>