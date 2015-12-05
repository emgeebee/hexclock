import alt from 'components/Dispatcher';

class TimeActions {

    updateTime() {
      var d = new Date();

      var h = d.getHours();
      var m = d.getMinutes();
      var s = d.getSeconds();

      var hourmins = parseInt(60 * h);
      var totmins = hourmins + m;
      var sfraction = s/60;

      totmins = (totmins < 10) ? 0 + totmins : totmins;
      this.dispatch({
        'mins': totmins,
        'secs': sfraction,
        'h': h,
        'm': m,
        's': s,
      });
    }
}

export default alt.createActions(TimeActions);
