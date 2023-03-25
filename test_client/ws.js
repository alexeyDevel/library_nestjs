const socket = io.connect('http://localhost:3000');
const bookIdInput = document.getElementById('bookId');
const commentInput = document.getElementById('comment');
function getAllCommentsByBooksId() {
  socket.emit('allComments', Number(bookIdInput.value), (answer) => {
    console.log(answer);
  });
}
function saveComment() {
  socket.emit(
    'addComment',
    { bookId: Number(bookIdInput.value), comment: commentInput.value },
    (answer) => {
      console.log(answer);
    },
  );
}
