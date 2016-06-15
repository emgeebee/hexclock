import configStore from '../stores/hextime/ConfigStore';
import configActions from '../actions/hextime/ConfigActions';
import timeStore from '../stores/hextime/TimeStore';
import timeActions from '../actions/hextime/TimeActions';
import React from 'react';

var AppComponent = React.createClass({

    getInitialState() {
        this.canvas = document.createElement('canvas');
        return {
            'time': timeStore.getState(),
            'config': configStore.getState(),
            'colour': '#FFFFFF',
            'opacity': 1
        };
    },

    updateConfig(val) {
        this.updateProp('config', val);
    },

    updateTime(val) {
        this.updateProp('colour', this.getColour(val.data.mins));
        this.updateProp('opacity', this.getOpacity(val.data.secs));
        this.updateProp('time', val);
        this.updateFavicon();
    },

    updateFavicon() {
        var ctx = this.canvas.getContext('2d');
        ctx.fillStyle = this.state.colour;
        ctx.fillRect(0, 0, 16, 16);

        var link = document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.class= 'favicon';
        link.href = this.canvas.toDataURL("image/x-icon");
        var links = document.querySelector('link[rel="shortcut icon"]');
        if(links) {
            links.remove();
        }
        document.getElementsByTagName('head')[0].appendChild(link);
    },

    updateProp(prop, val) {
        var obj = this.state;
        obj[prop] = val;
        this.setState(obj);
    },

    getColour(totmins) {
        var bluefraction = totmins < 60*12 ? parseInt(256 * Math.sin(totmins * Math.PI / (12 * 60))) : 0;
        var redfraction = totmins > 60*12 ? parseInt(256 * Math.sin((totmins - 60*12)* Math.PI / (12 * 60))) : 0;
        var yellowfraction = (totmins > 60*6 && totmins < 60*18) ? parseInt(256 * Math.sin((totmins - 60*6)* Math.PI / (12 * 60))) : 0;

        var bluehex = bluefraction.toString(16);
        var redhex = redfraction.toString(16);
        var yellowhex = yellowfraction.toString(16);

        bluehex = bluehex < 10 ? 0 + bluehex : bluehex;
        redhex = redhex < 10 ? 0 + redhex : redhex;
        yellowhex = yellowhex < 10 ? 0 + yellowhex : yellowhex;

        var hexval = parseInt(totmins / 60).toString(16);
        hexval = hexval < 10 ? 0 + hexval : hexval;

        return '#' +yellowhex + redhex + bluehex;
    },

    getOpacity(secs) {
        return secs;
    },

    componentDidMount() {
        this.canvas.width = 16;
        this.canvas.height = 16;
        timeActions.updateTime();

        configActions.initConfig();
        configStore.listen(this.updateConfig);
        timeStore.listen(this.updateTime);

        setInterval(timeActions.updateTime, 1000)
    },

    render() {
        return (
            <div className="hexColour" style={{'backgroundColor': this.state.colour}}>
                <canvas ref={a => this.canvas = a} />
                <div className="hex">
                    {this.state.colour} <br />
                    <span className="time">  {this.state.time.data.h}:{this.state.time.data.m}:{this.state.time.data.s}</span>
                </div>
            </div>
        );
    }
});


export default AppComponent;
