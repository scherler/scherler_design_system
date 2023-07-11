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

![image](https://github.com/scherler/scherler_design_system/assets/596701/085cc84f-2d07-4827-96a9-8380c539546e)


You can tell that you want a first or last style using `isFirst="true" isLast="true"`

```html
<ds-dropdown title="1st" isFirst="true"> my first content </ds-dropdown>
<ds-dropdown title="2nd"> my middle content </ds-dropdown>
<ds-dropdown title="3rd" isLast="true"> my last content </ds-dropdown>
```

![image](https://github.com/scherler/scherler_design_system/assets/596701/65ad3cb9-7609-408e-8fe4-9c99e43379c0)

You can apply your own colors:

```html
<div style="background-color: blue; color: white; border-radius: 1rem">
    <ds-dropdown isFirst="true" isLast="true">
    <div style="background-color: yellow; color: black">
        my body content
    </div>
    </ds-dropdown>
</div>
```

![image](https://github.com/scherler/scherler_design_system/assets/596701/ab0346c8-99ae-437b-b7eb-1a20ff92c535)

You can drop the default style using `noStyle="true"` 

```html
<ds-dropdown noStyle="true" title="my title"> </ds-dropdown>
```

![image](https://github.com/scherler/scherler_design_system/assets/596701/4b985fa5-6344-432f-9bd5-b5a72a68f513)

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

![image](https://github.com/scherler/scherler_design_system/assets/596701/eaf9a41a-350e-43ad-83c9-4e7e472d37de)
