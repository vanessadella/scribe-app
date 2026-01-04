import { reactive } from 'vue'

export const store = reactive({
    patients: [
        {
            id: 1,
            time: '09:30 AM',
            name: 'Robert Fox',
            chartId: '#4829',
            reason: 'Annual Checkup',
            status: 'Generating Note',
            statusColor: 'blue',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAij3-KsHWrS0lsWAQTvpTwMzj8H4vOy0rsJHUZg63XC8j4DwAs1ew7H_H75MW-Sup-cjqt1HZDaQ03yqCPkfDuVZ06NtoY4I9icDEZ68BkGbxOH50Miu9tERemJdkjDgNEgEgk_iJxOvGY_gDJYfVvIz3SwnzYY1ASODNCoEs5ypfe9ai_Z1zpSC40tGHiNDruvv4ajddA3bp4FuMRFtDOi32qVMal3_tIvnoqSAt0sM0I6e8iTI8eSqxzuwxx8Z0Kgeq6CBB32jo'
        },
        {
            id: 2,
            time: '10:15 AM',
            name: 'Esther Howard',
            chartId: '#8201',
            reason: 'Consultation',
            status: 'Pending Review',
            statusColor: 'orange',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2DPIJzuiOnrm6VVmhPFlZM2wY88rJzvxFywctlhezRpyC3vOKYrELtlWrjhUyb9HRepCu-DTQ4quQpYvkjbBv2j3r5HQdOcAi1LGBuC5rhfymuG2V90KNa9kFmtWKOP8xkMPsdZFvRT4EuVWe3yyR-ov5yw183hvl3TienOM5jr4pVPxl7uWInxAzz--awnZqrKp1Np7H-TdnU8giXeVlEFF79Xs6ZJX0da4tgj1ZtVPLKcwpGHHVKnPaMtcqlHCcYt1J95UUVag'
        },
        {
            id: 3,
            time: '11:00 AM',
            name: 'Cody Fisher',
            chartId: '#1943',
            reason: 'Follow-up',
            status: 'Completed',
            statusColor: 'green',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAXiu7MOzRAvVrg4djaTZ-I6SHJCmaYmONWJsh4nyziWhOJdY7gZUaHP01AAlzF4WMhBphP4IqQllYhynrn_qQOQx0hWmKPpiFsWqDQ1tdhYLlnfxridwfT_WE_eYRGrgAkhiKHMLZGx_xUDs2GIucefZaZcaXDOVkBgFbKcuN6jxUxg_3vAkHWJJSPVHW4u3c98mfTVNo58cOhvLsMncznMKTVSOIhj1zV1fAdod-eMhawB80uITriC6eliTA9FA494CfK6PRxCs'
        }
    ],
    addPatient(patient) {
        this.patients.unshift(patient)
    }
})
