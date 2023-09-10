function orThrow(value: unknown, messageOrError?: string | Error) {
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
  }

  return value;
}

function orThrowDeferred(value: unknown, messageOrError?: string | Error) {
  if (!value) {
    if (messageOrError === undefined) {
      setTimeout(() => { throw new Error() }, 0);
    }

    if (typeof messageOrError === 'string') {
      setTimeout(() => { throw new Error(messageOrError) }, 0);
    }

    if (messageOrError instanceof Error) {
      setTimeout(() => { throw messageOrError }, 0);
    }
  }

  return value;
}

export {
  orThrow,
  orThrowDeferred
}
