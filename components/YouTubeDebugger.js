import React from 'react'

export default class YoutubeDebugger extends React.Component {
  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
    this.bitrateUpdate = this.bitrateUpdate.bind(this) // inside click function this'ing
    this.resolutionUpdate = this.resolutionUpdate.bind(this) // inside click function this'ing
  }

  bitrateUpdate(event) {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12,
      }),
    })
  }
  resolutionUpdate(event) {
    this.setState({
      settings:
        { bitrate: 8, // bitrate isn't an object,
          video: Object.assign({}, this.state.settings.video, {
        resolution: '720p', 
      }
    )},
      // settings: {
      //   ...this.state.settings.video,
      //   resolution: '720p',
      // }, // spread operator issues
    })
  }

  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.bitrateUpdate}>Bitrate Update</button>
        <button className='resolution' onClick={this.resolutionUpdate}>Resolution Update</button>
      </div>
    )
  }
}
