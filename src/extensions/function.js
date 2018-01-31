Function.prototype.debounce =
  Function.prototype.debounce || function debounce(wait, context) {
    let timeoutId;
    const self = this;

    return (...callArguments) => {
      const callContext = context || this;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => self.apply(callContext, callArguments), wait);
    };
  };
