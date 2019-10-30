import ReactReconciler from 'react-reconciler';

let reconciler = ReactReconciler({
  /** host confifg */
  getPublicInstance(...args) {
    console.log('getPublicInstance', ...args);
  },
  getChildHostContext(...args) {
    console.log('getChildHostContext', ...args);
  },
  getRootHostContext(...args) {
    console.log('getRootHostContext', ...args);
  },

  /* 插入节点相关 */

  appendInitialChild(parent, child) {
    parent.appendChild(child);
  },
  appendChildToContainer(container, child) {
    container.appendChild(child);
  },
  appendChild(parent, child) {
    parent.appendChild(child);
  },

  /* 删除节点相关 */
  removeChildFromContainer(container, child) {
    container.removeChild(child);
  },
  removeChild(parent, child) {
    parent.removeChild(child);
  },
  insertInContainerBefore(container, child, before) {
    container.insertBefore(child, before);
  },
  insertBefore(parent, child, before) {
    parent.insertBefore(child, before);
  },

  prepareUpdate(instance, type, oldProp, newProps, rootContainerInstance, hostContext) {
    let payload;
    if (oldProp.bgColor !== newProps.bgColor) {
      payload = { newBgColor: newProps.bgColor };
    }
    return payload;
  },

  commitUpdate(instance, updatePayload, type, oldProps, newProps, finishedWork) {
    if (updatePayload.newBgColor) {
      instance.style.backgroundColor = updatePayload.newBgColor;
    }
  },

  prepareForCommit(...args) {
    console.log('prepareForCommit', ...args);
  },
  resetAfterCommit(...args) {
    console.log('resetAfterCommit', ...args);
  },
  finalizeInitialChildren(...args) {},
  shouldSetTextContent(...args) {
    console.log('shouldSetTextContent', ...args);
  },
  shouldDeprioritizeSubtree(...args) {
    console.log('shouldDeprioritizeSubtree', ...args);
  },

  /** 创建root节点 */
  createInstance(type, props, root, hostContext, internalInstanceHandle) {
    let el = document.createElement(type);
    ['alt', 'className', 'href', 'rel', 'src', 'target'].forEach(k => {
      if (props[k]) el[k] = props[k];
    });

    if (props.onClick) {
      el.addEventListener('click', props.onClick);
    }
    if (props.bgColor) {
      el.style.backgroundColor = props.bgColor;
    }
    return el;
  },

  /** 创建文字 */
  createTextInstance(text, props, root, hostContext, internalInstanceHandle) {
    console.log('createTextInstance', ...arguments);

    return document.createTextNode(text);
  },

  scheduleDeferredCallback(...args) {
    console.log('scheduleDeferredCallback', ...args);
  },
  cancelDeferredCallback(...args) {
    console.log('cancelDeferredCallback', ...args);
  },
  shouldYield(...args) {
    console.log('shouldYield', ...args);
  },
  scheduleTimeout(...args) {
    console.log('scheduleTimeout', ...args);
  },
  cancelTimeout(...args) {
    console.log('cancelTimeout', ...args);
  },
  noTimeout(...args) {
    console.log('noTimeout', ...args);
  },
  now(...args) {
    console.log('now', ...args);
  },
  isPrimaryRenderer(...args) {
    console.log('isPrimaryRenderer', ...args);
  },
  supportsMutation: true,
});

let ReactDOMMini = {
  render(whatToRender, div) {
    let container = reconciler.createContainer(div, false, false);
    reconciler.updateContainer(whatToRender, container, null, null);
  },
};

export default ReactDOMMini;
