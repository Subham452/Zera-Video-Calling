import React from 'react'
import { useParams } from "react-router-dom"
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {

    function randomID(len) {
        let result = '';
        if (result) return result;
        var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
          maxPos = chars.length,
          i;
        len = len || 5;
        for (i = 0; i < len; i++) {
          result += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return result;
      }

    const { roomId } = useParams()
    const roomID = roomId;
    const userID = randomID(5);
    let myMeeting = async (element) => {
   // generate Kit Token
    const appID = 2067608566;
    const serverSecret = "8bb040cbba2a99920d5d78982a54c77e";
    const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  userID,  roomId);

  
   // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Copy Link',
        //   url:
        //    window.location.protocol + '//' + 
        //    window.location.host + window.location.pathname +
        //     '?roomID=' +
        //     roomID,
        // url: `http://localhost:3000/room/${roomId}`
        url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });

  
};

  return (
    <div ref={myMeeting}>

    </div>
  )
}

export default Room
