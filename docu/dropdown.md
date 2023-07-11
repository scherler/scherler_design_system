## This is a demo of the `ds-dropdown` web component

      The default style with `title="my ds-dropdown"`

```html
<ds-dropdown title="my ds-dropdown" isFirst="true">
    my body content
</ds-dropdown>
<ds-dropdown title="my ds-dropdown">
    <p slot="title">
    The title can be
    <span st>rich</span>
    html using
    `slot="title"`
    </p>

    my body content
</ds-dropdown>
<ds-dropdown title="my ds-dropdown" isLast="true">
    <p slot="title">
    Furter more you can add things (x) to the right of the carret
    `slot="more"`
    </p>
    <div slot="more">(x)</div>
    my body content
</ds-dropdown>
```

      You can tell that you want a first or last style using `isFirst="true" isLast="true"`

```html
<ds-dropdown title="1st" isFirst="true"> my first content </ds-dropdown>
<ds-dropdown title="2nd"> my middle content </ds-dropdown>
<ds-dropdown title="3rd" isLast="true"> my last content </ds-dropdown>
```

You can apply your own colors:

```html
<div style="background-color: blue; color: white; border-radius: 1rem">
    <ds-dropdown isFirst="true" isLast="true">
    <div style="background-color: yellow; color: black">
        my body content
    </div>
    </ds-dropdown>
</div>```

      You can drop the default style using `noStyle="true"` 
`<ds-dropdown noStyle="true" title="my title"> </ds-dropdown>`

    and provide your own
   ```html
   <div style="background-color: blue; color: white">
      <ds-dropdown open="true" noStyle="true" title="my title">
        <div style="background-color: yellow; color: black">
          my body content
        </div>
      </ds-dropdown>
    </div>
    ```
