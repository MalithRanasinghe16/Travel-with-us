const form = document.querySelector('form');
        const comments = document.querySelector('#comments');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = form.name.value;
            const email = form.email.value;
            const comment = form.comment.value;

            const commentBox = document.createElement('div');
            commentBox.classList.add('comment');

            const heading = document.createElement('h3');
            heading.textContent = name;

            const emailParagraph = document.createElement('p');
            emailParagraph.textContent = email;

            const commentParagraph = document.createElement('p');
            commentParagraph.textContent = comment;

            commentBox.appendChild(heading);
            commentBox.appendChild(emailParagraph);
            commentBox.appendChild(commentParagraph);

            comments.appendChild(commentBox);

            form.reset();
        });