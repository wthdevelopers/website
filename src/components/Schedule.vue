<template>
    <section class="schedule__table">
        <h1 class="table__title">Schedule</h1>
        <table class="table__container">
            <tr>
                <th class="table__header">Day</th>
                <th class="table__header">Timing</th>
                <th class="table__header">Activity</th>
            </tr>
            <tr>
                <td>Sat</td>
                <td>0900 - 1000</td>
                <td>Registration</td>
            </tr>
            <tr>
                <td>Sat</td>
                <td>1000 - 1100</td>
                <td>Briefing</td>
            </tr>
            <tr>
                <td>Sun/Sat</td>
                <td>1100 - 1100</td>
                <td>Hacking</td>
            </tr>
            <tr>
                <td>Sun</td>
                <td>1100 - 1300</td>
                <td>Exhibition Setup</td>
            </tr>
            <tr>
                <td>Sun</td>
                <td>1300 - 1400</td>
                <td>Lunch</td>
            </tr>
            <tr>
                <td>Sun</td>
                <td>1400 - 1600</td>
                <td>Judging</td>
            </tr>
            <tr>
                <td>Sun</td>
                <td>1600 - 1700</td>
                <td>Prize Presentation</td>
            </tr>
            <tr>
                <th class="table__footer"></th>
                <th class="table__footer"></th>
                <th class="table__footer"></th>
            </tr>
        </table>
    </section>
</template>


<script>
export default {
    name: 'Schedule'
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
        width: inherit;
        border-radius: 3rem;
        border-collapse: collapse;
        box-shadow: -1.0rem 1rem #a3d6f3;
        text-align: left;
        font-size: 1.5rem;
        margin: auto;
    }

    th {
        height: 5rem;
        vertical-align: bottom;
        background-color: #dbebff;
        font-weight: normal;
        padding-bottom: 0.5rem;
    }

    th.table__header:first-child {
        border-top-left-radius: 3rem;
        padding-left: 1.5rem;
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
    
    td {
        height: 3.5rem;
    }

    td:first-child {
        padding-left: 1.5rem;
    }

    tr:nth-child(even) {
        background-color: #f1f7ff;
    }

    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        .schedule__table {
            width: 20rem;
        }

        .table__title {
            font-size: 2rem;
        }

        .table__container {
            box-shadow: 0 1rem #a3d6f3;
            font-size: 1rem;
        }

        th.table__header:first-child {
            padding-left: 1rem;
        }

        td:first-child {
            padding-left: 1rem;
        }
    }
</style>