const transform = async () => {
    
    return new TransformStream({
        transform(chunk, controller) {
          controller.enqueue(chunk.toUpperCase());
        },
      });
};

await transform();