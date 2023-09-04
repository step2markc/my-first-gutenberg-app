/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/CreatePageForm.js":
/*!******************************************!*\
  !*** ./src/components/CreatePageForm.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreatePageForm: function() { return /* binding */ CreatePageForm; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PageForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageForm */ "./src/components/PageForm.js");





function CreatePageForm(_ref) {
  let {
    onCancel,
    onSaveFinished
  } = _ref;
  const [title, setTitle] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    lastError,
    isSaving
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    return {
      lastError: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).getLastEntitySaveError('postType', 'page'),
      isSaving: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).isSavingEntityRecord('postType', 'page')
    };
  }, [title]);
  const {
    saveEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store);
  const handleSave = async () => {
    const savedRecord = await saveEntityRecord('postType', 'page', {
      title,
      status: 'publish'
    });
    if (savedRecord) {
      onSaveFinished();
    }
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PageForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: title,
    onChangeTitle: setTitle,
    hasEdits: !!title,
    lastError: lastError,
    isSaving: isSaving,
    onCancel: onCancel,
    onSave: handleSave
  });
}

/***/ }),

/***/ "./src/components/EditPageForm.js":
/*!****************************************!*\
  !*** ./src/components/EditPageForm.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditPageForm: function() { return /* binding */ EditPageForm; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PageForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageForm */ "./src/components/PageForm.js");





function EditPageForm(_ref) {
  let {
    pageId,
    onCancel,
    onSaveFinished
  } = _ref;
  const {
    isSaving,
    hasEdits,
    lastError,
    page
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    return {
      isSaving: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).isSavingEntityRecord('postType', 'page', pageId),
      hasEdits: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).hasEditsForEntityRecord('postType', 'page', pageId),
      page: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).getEditedEntityRecord('postType', 'page', pageId),
      lastError: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).getLastEntitySaveError('postType', 'page', pageId)
    };
  }, [pageId]);
  const {
    editEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store);
  const handleChange = title => editEntityRecord('postType', 'page', pageId, {
    title
  });
  const {
    saveEditedEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store);
  const handleSave = async () => {
    const updatedRecord = await saveEditedEntityRecord('postType', 'page', pageId);
    if (updatedRecord) {
      onSaveFinished();
    }
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PageForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__.decodeEntities)(page.title),
    onChangeTitle: handleChange,
    hasEdits: hasEdits,
    lastError: lastError,
    isSaving: isSaving,
    onCancel: onCancel,
    onSave: handleSave
  });
}

/***/ }),

/***/ "./src/components/PageForm.js":
/*!************************************!*\
  !*** ./src/components/PageForm.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PageForm; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__);



function PageForm(_ref) {
  let {
    title,
    onChangeTitle,
    hasEdits,
    lastError,
    isSaving,
    onCancel,
    onSave
  } = _ref;
  console.log('change', onChangeTitle);
  console.log('lastError', lastError);
  console.log('hasEdits', hasEdits);
  console.log('isSaving', isSaving);
  console.log('onCancel', onCancel);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "my-gutenberg-form"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    value: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__.decodeEntities)(title),
    label: "Page title:",
    onChange: onChangeTitle
  }), lastError ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "form-error"
  }, "Error: ", lastError.message) : false, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "form-buttons"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: onSave,
    variant: "primary",
    disabled: !hasEdits || isSaving
  }, isSaving ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null), "Saving") : 'Save'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: onCancel,
    variant: "tertiary",
    disabled: isSaving
  }, "Cancel")));
}

/***/ }),

/***/ "./src/components/createPageButton.js":
/*!********************************************!*\
  !*** ./src/components/createPageButton.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreatePageButton: function() { return /* binding */ CreatePageButton; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CreatePageForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreatePageForm */ "./src/components/CreatePageForm.js");





function CreatePageButton() {
  const [isOpen, setOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: openModal,
    variant: "primary"
  }, "New Page"), isOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    onRequestClose: closeModal,
    title: "Create a new Page"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CreatePageForm__WEBPACK_IMPORTED_MODULE_3__.CreatePageForm, {
    onCancel: closeModal,
    onSaveFinished: closeModal
  })));
}

/***/ }),

/***/ "./src/components/deletePageButton.js":
/*!********************************************!*\
  !*** ./src/components/deletePageButton.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeletePageButton: function() { return /* binding */ DeletePageButton; },
/* harmony export */   Notifications: function() { return /* binding */ Notifications; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);






const DeletePageButton = _ref => {
  let {
    pageId,
    onCancel,
    onSavedFinish
  } = _ref;
  const {
    createSuccessNotice,
    createErrorNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_2__.store);
  const {
    deleteEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store);
  const {
    isDeleting
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => ({
    isDeleting: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store).isDeletingEntityRecord('postType', 'page', pageId)
  }));
  const {
    getLastEntityDeleteError
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store);
  const handleDelete = async () => {
    const success = await deleteEntityRecord('postType', 'page', pageId);
    if (success) {
      createSuccessNotice("The page was deleted", {
        type: 'snackbar'
      });
    } else {
      const lastError = getLastEntityDeleteError('postType', 'page', pageId);
      const msg = (lastError?.message || 'There was a problem') + ' Refresh page, try again';
      createErrorNotice(msg, {
        type: 'snackbar'
      });
    }
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    onClick: handleDelete
  }, isDeleting ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null), "Deleting...") : 'Delete');
};
function Notifications() {
  const notices = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select(_wordpress_notices__WEBPACK_IMPORTED_MODULE_2__.store).getNotices(), []);
  const {
    removeNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_2__.store);
  const snackbarNotices = notices.filter(_ref2 => {
    let {
      type
    } = _ref2;
    return type == 'snackbar';
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SnackbarList, {
    notices: snackbarNotices,
    className: "components-editor-notices__snackbar",
    onRemove: removeNotice
  });
}

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/***/ (function(module) {

module.exports = window["wp"]["htmlEntities"];

/***/ }),

/***/ "@wordpress/notices":
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["notices"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_EditPageForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/EditPageForm */ "./src/components/EditPageForm.js");
/* harmony import */ var _components_createPageButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/createPageButton */ "./src/components/createPageButton.js");
/* harmony import */ var _components_deletePageButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/deletePageButton */ "./src/components/deletePageButton.js");









const PageEditButton = _ref => {
  let {
    pageId
  } = _ref;
  const [isOpen, setOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    onClick: openModal,
    variant: "primary"
  }, "Edit"), isOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Modal, {
    onRequestClose: closeModal,
    title: "Edit Page"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_EditPageForm__WEBPACK_IMPORTED_MODULE_5__.EditPageForm, {
    pageId: pageId,
    onCancel: closeModal,
    onSaveFinished: closeModal
  })));
};
function MyFirstApp() {
  const [searchTerm, setSearchTerm] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    pages,
    hasResolved
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const query = {
      per_page: 8
    };
    if (searchTerm) {
      query.search = searchTerm;
    }
    const selectorArgs = ['postType', 'page', query];
    return {
      pages: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getEntityRecords(...selectorArgs),
      hasResolved: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).hasFinishedResolution('getEntityRecords', selectorArgs)
    };
  }, [searchTerm]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "list-controls"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SearchControl, {
    onChange: setSearchTerm,
    value: searchTerm
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_createPageButton__WEBPACK_IMPORTED_MODULE_6__.CreatePageButton, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PagesList, {
    hasResolved: hasResolved,
    pages: pages
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_deletePageButton__WEBPACK_IMPORTED_MODULE_7__.Notifications, null));
}
function PagesList(_ref2) {
  let {
    hasResolved,
    pages
  } = _ref2;
  if (!hasResolved) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Spinner, null);
  }
  if (!pages?.length) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Nothing Found");
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "wp-list-table widefat fixed striped table-view-list"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "Title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "Actions"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, pages?.map(page => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    key: page.id
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__.decodeEntities)(page.title.rendered)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "form-buttons"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PageEditButton, {
    pageId: page.id
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_deletePageButton__WEBPACK_IMPORTED_MODULE_7__.DeletePageButton, {
    pageId: page.id
  })))))));
}
const el = document.getElementById('my-first-gutenberg-app');
const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot)(el);
root.render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MyFirstApp, null));
}();
/******/ })()
;
//# sourceMappingURL=index.js.map