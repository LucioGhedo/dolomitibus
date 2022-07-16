var app = new Vue({
    el: '#root',
    data: {
      giornomeno: dayjs().subtract(1.08, 'hours').format('MM/DD/YYYY HH:mm:ss'),
      data: dayjs().format('HH:mm:ss'),
      giorno: dayjs().subtract(8, 'minutes').format('MM/DD/YYYY HH:mm:ss')
    },
    methods: {
      updateTime(data) {
        this.data = dayjs().format('HH:mm:ss'),
        setInterval(this.updateTime, 1000)
      }
    },
    created() {
      this.updateTime();
    }
  })