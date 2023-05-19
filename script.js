document.addEventListener('DOMContentLoaded', function() {
    // Generate mock data for posts
    const generateMockPosts = (count) => {
      const posts = [];
  
      for (let i = 1; i <= count; i++) {
        const post = {
          id: i,
          title: `Post ${i}`,
          description: `Description ${i}`,
          imageUrl: `images/image${i}.jpg`, // Update image URL
          likes: 0,
          comments: [],
        };
  
        posts.push(post);
      }
  
      return posts;
    };
  
    // Render posts to the DOM
    const renderPosts = (posts) => {
      const postsContainer = document.getElementById('posts');
  
      postsContainer.innerHTML = ''; // Clear existing posts
  
      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
  
        const imageLink = document.createElement('a');
        imageLink.href = post.imageUrl;
  
        const imageElement = document.createElement('img');
        imageElement.classList.add('post-image');
        imageElement.src = post.imageUrl;
        imageElement.alt = `Post ${post.id}`;
  
        const postDetailsElement = document.createElement('div');
        postDetailsElement.classList.add('post-details');
  
        const titleElement = document.createElement('h2');
        titleElement.classList.add('post-title');
        titleElement.textContent = post.title;
  
        const descriptionElement = document.createElement('p');
        descriptionElement.classList.add('post-description');
        descriptionElement.textContent = post.description;
  
        const likeButton = document.createElement('button');
        likeButton.textContent = `Likes: ${post.likes}`;
        likeButton.addEventListener('click', () => {
          post.likes++;
          likeButton.textContent = `Likes: ${post.likes}`;
        });
  
        const commentsContainer = document.createElement('div');
        commentsContainer.classList.add('comments-container');
  
        const commentInput = document.createElement('input');
        commentInput.type = 'text';
        commentInput.placeholder = 'Add a comment';
  
        const commentButton = document.createElement('button');
        commentButton.textContent = 'Comment';
        commentButton.addEventListener('click', () => {
          const commentText = commentInput.value;
          if (commentText) {
            post.comments.push(commentText);
            renderComments(post.comments, commentsContainer);
            commentInput.value = '';
          }
        });
  
        postDetailsElement.appendChild(titleElement);
        postDetailsElement.appendChild(descriptionElement);
        postDetailsElement.appendChild(likeButton);
  
        postElement.appendChild(imageLink);
        imageLink.appendChild(imageElement);
        postElement.appendChild(postDetailsElement);
        postElement.appendChild(commentsContainer);
        postElement.appendChild(commentInput);
        postElement.appendChild(commentButton);
  
        postsContainer.appendChild(postElement);
      });
    };
  
    // Render comments to the DOM
    const renderComments = (comments, container) => {
      container.innerHTML = '';
  
      comments.forEach(comment => {
        const commentElement = document.createElement('p');
        commentElement.textContent = comment;
        container.appendChild(commentElement);
      });
    };
  
    // Generate mock posts and render them
    const mockPosts = generateMockPosts(6);
    renderPosts(mockPosts);
  
    // Toggle between grid and list view
    const gridViewButton = document.querySelector('.grid-view');
    const listViewButton = document.querySelector('.list-view');
    const postsContainer = document.getElementById('posts');
  
    gridViewButton.addEventListener('click', () => {
      postsContainer.classList.remove('list-view');
      postsContainer.classList.add('grid-view');
    });
  
    listViewButton.addEventListener('click', () => {
      postsContainer.classList.remove('grid-view');
      postsContainer.classList.add('list-view');
    });
  });
  