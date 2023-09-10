function orThrow<T>(value: T, messageOrError?: string | Error) {
  if (!value) {
    if (messageOrError === undefined) {
      throw new Error();
    }

    if (typeof messageOrError === 'string') {
      throw new Error(messageOrError);
    }

    if (messageOrError instanceof Error) {
      throw messageOrError;
    }

    throw new Error();
  }

  return value;
}

function orThrowDeferred<T>(value: T, messageOrError?: string | Error) {
  if (!value) {
    if (messageOrError === undefined) {
      setTimeout(() => { throw new Error() }, 0);
      throw new Error();
    }

    if (typeof messageOrError === 'string') {
      setTimeout(() => { throw new Error(messageOrError) }, 0);
      throw new Error(messageOrError);
    }

    if (messageOrError instanceof Error) {
      setTimeout(() => { throw messageOrError }, 0);
      throw messageOrError;
    }

    setTimeout(() => { throw new Error() }, 0);
    throw new Error();
  }

  return value;
}

export {
  orThrow,
  orThrowDeferred
}
