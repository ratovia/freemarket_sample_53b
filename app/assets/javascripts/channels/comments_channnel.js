$(function(){
  App.comment = App.cable.subscriptions.create({
    channel: "CommentsChannel",
    item_id: $('.detail_item').attr('data-item-id'), 
  },{
    connected() {
      console.log("helloworld")
      // Called when the subscription is ready for use on the server
    },
  
    disconnected() {
      // Called when the subscription has been terminated by the server
    },
  
    received(data) {
      const html = `<p>${data.text}</p>`;
      // const messages = document.getElementById('messages');
      // const newMessage = document.getElementById('message_text');
      // messages.insertAdjacentHTML('afterbegin', html);
      // newMessage.value='';
      console.log(html)
    }
  });
})