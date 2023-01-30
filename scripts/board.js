	let messageListAll = [];
	let messageDetailIndex = 0;
	const messageContentInput = document.querySelector('#messageContent');
	const messageBtn = document.querySelector('#messageBtn');
	const messageListContainer = document.querySelector('#messageListContainer');
	const messageCancelEditBtn = document.querySelector('#messageCancelEditBtn');
	const searchText = document.querySelector('#searchText')
	let warnmessage = null;
    
	function clearShowMessageList() {
		editMessageInfo = null;

		messageCancelEditBtn.style.display = 'none';
		messageContentInput.value = '';
		//searchText.value="";
		while (messageListContainer.firstChild) {
			messageListContainer.removeChild(messageListContainer.firstChild);
		}
	}

	function renderMessageList(messageList = []) {
		clearShowMessageList();
		messageList.forEach((messageInfo) => {
			const content = document.createElement('span');
			content.textContent = messageInfo.content;
			const dBtnEdit = document.createElement('button');
			dBtnEdit.textContent = '編輯';
			dBtnEdit.addEventListener('click',
				() => {
					setEditMessageInfo(messageInfo);
				});
			const dBtnDelete = document.createElement('button');
			dBtnDelete.textContent = '刪除';
			dBtnDelete.addEventListener('click',
				() => {
					deleteMessage(messageInfo.id);
				})
			const message = document.createElement('div');
			message.appendChild(content);
			message.appendChild(dBtnEdit);
			message.appendChild(dBtnDelete);
			messageListContainer.appendChild(message);
		});
	}

	function init() {
		searchText.value = '';
		renderMessageList(messageListAll);
		messageBtn.addEventListener('click', () => {
			const contentValue = messageContentInput.value;
			setMessage(contentValue);
		})
		messageCancelEditBtn.addEventListener('click', () => {
			renderMessageList(); messageListAll
		})
		document.querySelector('#searchBtn').addEventListener('click', searchmessage);
		document.querySelector('#cancelSearchBtn').addEventListener('click', init);
	}

	function addMessage(value = '') {
		messageListAll = [
			...messageListAll, {
				id: messageDetailIndex,
				content: value,
			},
		];
		messageDetailIndex = messageDetailIndex + 1;
		renderMessageList(messageListAll);
	}

	function editMessage(id, value = '') {
		messageListAll = messageListAll.map((messageInfo) => {
			if (messageInfo.id === id) {
				return {
					id: id,
					content: value,
				};
			}
			return messageInfo;
		});
		renderMessageList(messageListAll);
	}

	function setEditMessageInfo(messageInfo) {
		editMessageInfo = messageInfo;
		messageCancelEditBtn.style.display = 'table-row';
		messageContentInput.value = editMessageInfo.content;
	}

	function setMessage(value = '') {
		if (editMessageInfo) {
			editMessage(editMessageInfo.id, value);
		} else {
			addMessage(value);
		}
	}

	function deleteMessage(id) {
		messageListAll = messageListAll.filter((messageInfo) => messageInfo.id !== id);
		renderMessageList(messageListAll);
	}

	function searchmessage() {
		const searchmessageList = messageListAll.filter((n) => n.content.indexOf(searchText.value) != -1);
		if (searchmessageList.length > 0) {
			clearShowMessageList();
			renderMessageList(searchmessageList);
		}
	}
	init();
	debugger;