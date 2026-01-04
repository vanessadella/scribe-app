import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import PatientList from '../views/PatientList.vue'
import Recordings from '../views/Recordings.vue'
import SOAPNotes from '../views/SOAPNotes.vue'
import Settings from '../views/Settings.vue'
import ActiveVisit from '../views/ActiveVisit.vue'
import ProcessingVisit from '../views/ProcessingVisit.vue'
import VisitReview from '../views/VisitReview.vue'

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/patients',
        name: 'PatientList',
        component: PatientList
    },
    {
        path: '/recordings',
        name: 'Recordings',
        component: Recordings
    },
    {
        path: '/soap-notes',
        name: 'SOAPNotes',
        component: SOAPNotes
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings
    },
    {
        path: '/active-visit',
        name: 'ActiveVisit',
        component: ActiveVisit
    },
    {
        path: '/visit-processing',
        name: 'ProcessingVisit',
        component: ProcessingVisit
    },
    {
        path: '/visit-review',
        name: 'VisitReview',
        component: VisitReview
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
