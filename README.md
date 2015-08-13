# Chat

Displays a chat interface over data channel.

Namespace : bdsft_webrtc.default.chat

Dependencies : [SIP Stack](https://github.com/BroadSoft-Xtended/Library-WebRTC-SIPStack)

## Elements
<a name="elements"></a>

Element  |Type  |Description
---------|------|------------------------------------
input    |div   |Displays the chat input for sending a message.
messagesContent |div   |Displays the sent and received messages.

## Properties
<a name="properties"></a>

Property  |Type    |Description
----------|--------|----------------------------------
input     |string  |The text typed into the input field.

## Configuration
<a name="configuration"></a>

Property         |Type     |Default  |Description
-----------------|---------|---------|------------------------------------
enableChat	     |boolean  |false    |True if the chat is enabled.

## Methods
<a name="methods"></a>

Method   |Parameters  |Description
---------|------------|-------------------
send()   |            |Sends the text from the input via data channel to the peer.


